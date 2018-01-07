open StateDataType;

open VboBufferType;

let render = (gl, uid, state: StateDataType.state) => {
  let transformIndex: int = GameObjectAdmin.unsafeGetTransformComponent(uid, state);
  let materialIndex: int = GameObjectAdmin.unsafeGetMaterialComponent(uid, state);
  let shaderIndex = MaterialAdmin.unsafeGetShaderIndex(materialIndex, state);
  let geometryIndex: int = GameObjectAdmin.unsafeGetGeometryComponent(uid, state);
  let {vertexBufferMap, elementArrayBufferMap} = VboBufferGetStateDataUtils.getVboBufferData(state);
  let program = ProgramSystem.unsafeGetProgram(shaderIndex, state);
  let state =
    state
    |> ProgramSystem.use(gl, program)
    |> GLSLSenderConfigDataHandleSystem.getAttributeSendData(shaderIndex)
    |> List.fold_left(
         (
           (state, {pos, size, buffer, sendFunc}) => {
             let arrayBuffer =
               switch buffer {
               | "vertex" =>
                 ArrayBufferSystem.getOrCreateBuffer(
                   gl,
                   geometryIndex,
                   vertexBufferMap,
                   [@bs] GeometryAdmin.unsafeGetVertices,
                   state
                 )
               | "index" =>
                 ElementArrayBufferSystem.getOrCreateBuffer(
                   gl,
                   geometryIndex,
                   elementArrayBufferMap,
                   [@bs] GeometryAdmin.unsafeGetIndices,
                   state
                 )
               | _ => ExceptionHandleSystem.throwMessage({j|unknow buffer:$buffer|j})
               };
             [@bs] sendFunc(gl, size, pos, arrayBuffer, state)
           }
         ),
         state
       )
    |> GLSLSenderConfigDataHandleSystem.getUniformSendNoCachableData(shaderIndex)
    |> List.fold_left(
         (
           (
             state,
             {pos, getNoCachableDataFunc, sendNoCachableDataFunc}: uniformSendNoCachableData
           ) => {
             [@bs]
             sendNoCachableDataFunc(gl, pos, [@bs] getNoCachableDataFunc(transformIndex, state));
             state
           }
         ),
         state
       );
  let {lastSendMaterial} as data = GLSLSenderSystem.getGLSLSenderData(state);
  let state =
    switch lastSendMaterial {
    | Some(lastSendMaterial) when lastSendMaterial === materialIndex => state
    | _ =>
      data.lastSendMaterial = Some(materialIndex);
      state
      |> GLSLSenderConfigDataHandleSystem.getUniformSendCachableData(shaderIndex)
      |> List.fold_left(
           (
             (
               state,
               {shaderCacheMap, name, pos, getCachableDataFunc, sendCachableDataFunc}: uniformSendCachableData
             ) => {
               [@bs]
               sendCachableDataFunc(
                 gl,
                 shaderCacheMap,
                 name,
                 pos,
                 [@bs] getCachableDataFunc(materialIndex, state)
               );
               state
             }
           ),
           state
         )
    };
  (state, shaderIndex, geometryIndex)
};