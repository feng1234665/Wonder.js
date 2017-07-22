import { ensureFunc } from "../../../../definition/typescript/decorator/contract";
import { createMap, isValidMapValue } from "../../../../utils/objectUtils";
export var setEmptyLocationMap = function (shaderIndex, LocationDataFromSystem) {
    LocationDataFromSystem.attributeLocationMap[shaderIndex] = createMap();
    LocationDataFromSystem.uniformLocationMap[shaderIndex] = createMap();
};
export var getAttribLocation = ensureFunc(function (pos, gl, program, name, attributeLocationMap) {
}, function (gl, program, name, attributeLocationMap) {
    var pos = null;
    pos = attributeLocationMap[name];
    if (isValidMapValue(pos)) {
        return pos;
    }
    pos = gl.getAttribLocation(program, name);
    attributeLocationMap[name] = pos;
    return pos;
});
export var getUniformLocation = ensureFunc(function (pos, gl, name, uniformLocationMap) {
}, function (gl, program, name, uniformLocationMap) {
    var pos = null;
    pos = uniformLocationMap[name];
    if (isValidMapValue(pos)) {
        return pos;
    }
    pos = gl.getUniformLocation(program, name);
    uniformLocationMap[name] = pos;
    return pos;
});
export var isUniformLocationNotExist = function (pos) {
    return pos === null;
};
export var isAttributeLocationNotExist = function (pos) {
    return pos === -1;
};
export var initData = function (LocationDataFromSystem) {
    LocationDataFromSystem.attributeLocationMap = createMap();
    LocationDataFromSystem.uniformLocationMap = createMap();
};
//# sourceMappingURL=locationUtils.js.map