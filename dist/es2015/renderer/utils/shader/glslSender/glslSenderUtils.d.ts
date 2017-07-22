import { RenderCommandUniformData, UniformShaderLocationMap, UniformCacheMap } from "../../../type/dataType";
import { BasicMaterialForGetUniformDataDataMap, LightMaterialForGetUniformDataDataMap, MaterialForGetUniformDataDataMap } from "../../../type/utilsType";
import { Vector3 } from "../../../../math/Vector3";
export declare var getUniformData: (field: string, from: string, renderCommandUniformData: RenderCommandUniformData, materialData: MaterialForGetUniformDataDataMap, basicMaterialData: BasicMaterialForGetUniformDataDataMap, lightMaterialData: LightMaterialForGetUniformDataDataMap) => any;
export declare var sendBuffer: (gl: WebGLRenderingContext, type: string, pos: number, buffer: WebGLBuffer, geometryIndex: number, GLSLSenderDataFromSystem: any, ArrayBufferData: any) => void;
export declare var sendMatrix3: (gl: WebGLRenderingContext, program: WebGLProgram, name: string, data: Float32Array, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare var sendMatrix4: (gl: WebGLRenderingContext, program: WebGLProgram, name: string, data: Float32Array, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare var sendVector3: (gl: WebGLRenderingContext, shaderIndex: number, program: WebGLProgram, name: string, data: Vector3, uniformCacheMap: UniformCacheMap, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare var sendInt: Function;
export declare var sendFloat1: Function;
export declare var sendFloat3: (gl: WebGLRenderingContext, shaderIndex: number, program: WebGLProgram, name: string, data: number[] | Float32Array, uniformCacheMap: UniformCacheMap, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare var addSendAttributeConfig: Function;
export declare var addSendUniformConfig: Function;
export declare var initData: (GLSLSenderDataFromSystem: any) => void;
