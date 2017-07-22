"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contract_1 = require("../../../../definition/typescript/decorator/contract");
var objectUtils_1 = require("../../../../utils/objectUtils");
exports.setEmptyLocationMap = function (shaderIndex, LocationDataFromSystem) {
    LocationDataFromSystem.attributeLocationMap[shaderIndex] = objectUtils_1.createMap();
    LocationDataFromSystem.uniformLocationMap[shaderIndex] = objectUtils_1.createMap();
};
exports.getAttribLocation = contract_1.ensureFunc(function (pos, gl, program, name, attributeLocationMap) {
}, function (gl, program, name, attributeLocationMap) {
    var pos = null;
    pos = attributeLocationMap[name];
    if (objectUtils_1.isValidMapValue(pos)) {
        return pos;
    }
    pos = gl.getAttribLocation(program, name);
    attributeLocationMap[name] = pos;
    return pos;
});
exports.getUniformLocation = contract_1.ensureFunc(function (pos, gl, name, uniformLocationMap) {
}, function (gl, program, name, uniformLocationMap) {
    var pos = null;
    pos = uniformLocationMap[name];
    if (objectUtils_1.isValidMapValue(pos)) {
        return pos;
    }
    pos = gl.getUniformLocation(program, name);
    uniformLocationMap[name] = pos;
    return pos;
});
exports.isUniformLocationNotExist = function (pos) {
    return pos === null;
};
exports.isAttributeLocationNotExist = function (pos) {
    return pos === -1;
};
exports.initData = function (LocationDataFromSystem) {
    LocationDataFromSystem.attributeLocationMap = objectUtils_1.createMap();
    LocationDataFromSystem.uniformLocationMap = objectUtils_1.createMap();
};
//# sourceMappingURL=locationUtils.js.map