import { EDrawMode } from "../../enum/EDrawMode";
import { EBufferType } from "../../enum/EBufferType";
export declare var getVertexDataSize: () => number;
export declare var getNormalDataSize: () => number;
export declare var getTexCoordsDataSize: () => number;
export declare var getIndexDataSize: () => number;
export declare var getUIntArrayClass: (indexType: EBufferType) => Uint16ArrayConstructor | Uint32ArrayConstructor;
export declare var getIndexType: (GeometryDataFromSystem: any) => any;
export declare var getIndexTypeSize: (GeometryDataFromSystem: any) => any;
export declare var hasIndices: (index: number, getIndices: Function, GeometryDataFromSystem: any) => boolean;
export declare var getDrawMode: (index: number, GeometryDataFromSystem: any) => EDrawMode;
export declare var getVerticesCount: (index: number, getVertices: Function, GeometryDataFromSystem: any) => any;
export declare var getIndicesCount: (index: number, getIndices: Function, GeometryDataFromSystem: any) => any;
export declare var createBufferViews: (buffer: any, count: number, UintArray: any, GeometryDataFromSystem: any) => void;
