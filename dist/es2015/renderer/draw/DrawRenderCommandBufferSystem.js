import { buildDrawFuncDataMap, clear as clearUtils, draw as drawUtils, initData as initDataUtils } from "../utils/draw/drawRenderCommandBufferUtils";
import { clear as clearGL, getGL } from "../device/DeviceManagerSystem";
import curry from "wonder-lodash/curry";
import { bindIndexBuffer, sendAttributeData, sendUniformData, use } from "../shader/ShaderSystem";
import { getIndexType, getIndexTypeSize, getIndicesCount, getVerticesCount, hasIndices } from "../../component/geometry/GeometrySystem";
import { bindAndUpdate, getMapCount } from "../texture/MapManagerSystem";
import { directlySendUniformData } from "../utils/shader/program/programUtils";
export var clear = curry(function (state, render_config, DeviceManagerData, data) {
    return clearUtils(getGL(DeviceManagerData, state), clearGL, render_config, DeviceManagerData, data);
});
export var draw = curry(function (state, DataBufferConfig, drawDataMap, bufferData) {
    return drawUtils(getGL(drawDataMap.DeviceManagerDataFromSystem, state), state, DataBufferConfig, buildDrawFuncDataMap(bindIndexBuffer, sendAttributeData, sendUniformData, directlySendUniformData, use, hasIndices, getIndicesCount, getIndexType, getIndexTypeSize, getVerticesCount, bindAndUpdate, getMapCount), drawDataMap, bufferData);
});
export var initData = initDataUtils;
//# sourceMappingURL=DrawRenderCommandBufferSystem.js.map