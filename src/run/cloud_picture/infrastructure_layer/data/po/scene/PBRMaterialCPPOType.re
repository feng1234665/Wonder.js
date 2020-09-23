type pbrMaterial = {
  maxIndex: ComponentCPPOType.index,
  buffer: SharedArrayBufferCPPOType.sharedArrayBuffer,
  mutable diffuseColors: Js.Typed_array.Float32Array.t,
  mutable speculars: Js.Typed_array.Float32Array.t,
  mutable roughnesses: Js.Typed_array.Float32Array.t,
  mutable metalnesses: Js.Typed_array.Float32Array.t,
  defaultDiffuseColor: VectorCPPOType.vec3,
  defaultSpecular: float,
  defaultRoughness: float,
  defaultMetalness: float,
  gameObjectsMap: ComponentCPPOType.gameObjectsMap,
  diffuseMapSourceIdMap:
    ImmutableSparseMap.t(PBRMaterialPOType.pbrMaterial, ImagePOType.id),
  metalRoughnessMapSourceIdMap:
    ImmutableSparseMap.t(PBRMaterialPOType.pbrMaterial, ImagePOType.id),
  emissionMapSourceIdMap:
    ImmutableSparseMap.t(PBRMaterialPOType.pbrMaterial, ImagePOType.id),
  normalMapSourceIdMap:
    ImmutableSparseMap.t(PBRMaterialPOType.pbrMaterial, ImagePOType.id),
};
