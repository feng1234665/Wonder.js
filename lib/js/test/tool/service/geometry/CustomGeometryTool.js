// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Log$WonderLog                                  = require("wonder-log/lib/js/src/Log.js");
var Contract$WonderLog                             = require("wonder-log/lib/js/src/Contract.js");
var GameObjectAPI$Wonderjs                         = require("../../../../src/api/GameObjectAPI.js");
var StateDataMain$Wonderjs                         = require("../../../../src/service/state/main/data/StateDataMain.js");
var CustomGeometryAPI$Wonderjs                     = require("../../../../src/api/geometry/CustomGeometryAPI.js");
var IsDebugMainService$Wonderjs                    = require("../../../../src/service/state/main/state/IsDebugMainService.js");
var GroupCustomGeometryService$Wonderjs            = require("../../../../src/service/record/main/geometry/custom/GroupCustomGeometryService.js");
var BufferCustomGeometryService$Wonderjs           = require("../../../../src/service/record/main/geometry/custom/BufferCustomGeometryService.js");
var GetComponentGameObjectService$Wonderjs         = require("../../../../src/service/record/main/gameObject/GetComponentGameObjectService.js");
var RecordCustomGeometryMainService$Wonderjs       = require("../../../../src/service/state/main/geometry/custom/RecordCustomGeometryMainService.js");
var DisposeCustomGeometryMainService$Wonderjs      = require("../../../../src/service/state/main/geometry/custom/DisposeCustomGeometryMainService.js");
var ReallocatedPointsGeometryService$Wonderjs      = require("../../../../src/service/primitive/geometry/ReallocatedPointsGeometryService.js");
var CurrentComponentDataMapRenderService$Wonderjs  = require("../../../../src/service/state/render/gameObject/CurrentComponentDataMapRenderService.js");
var GetCustomGeometryIndicesRenderService$Wonderjs = require("../../../../src/service/state/render/geometry/custom/GetCustomGeometryIndicesRenderService.js");

function buildInfo(startIndex, endIndex) {
  return /* tuple */[
          startIndex,
          endIndex
        ];
}

function getInfo(index, infos) {
  return ReallocatedPointsGeometryService$Wonderjs.getInfo(BufferCustomGeometryService$Wonderjs.getInfoIndex(index), infos);
}

var getRecord = RecordCustomGeometryMainService$Wonderjs.getRecord;

function createGameObject(state) {
  var match = CustomGeometryAPI$Wonderjs.createCustomGeometry(state);
  var geometry = match[1];
  var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
  var gameObject = match$1[1];
  var state$1 = GameObjectAPI$Wonderjs.addGameObjectCustomGeometryComponent(gameObject, geometry, match$1[0]);
  return /* tuple */[
          state$1,
          gameObject,
          geometry
        ];
}

function createGameObjectAndSetPointData(state) {
  var match = CustomGeometryAPI$Wonderjs.createCustomGeometry(state);
  var geometry = match[1];
  var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
  var gameObject = match$1[1];
  var state$1 = GameObjectAPI$Wonderjs.addGameObjectCustomGeometryComponent(gameObject, geometry, match$1[0]);
  var vertices1 = new Float32Array(/* float array */[10]);
  var normals1 = new Float32Array(/* float array */[1]);
  var indices1 = new Uint16Array(/* int array */[2]);
  var state$2 = CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry, indices1, CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry, normals1, CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry, vertices1, state$1)));
  return /* tuple */[
          state$2,
          gameObject,
          geometry,
          /* tuple */[
            vertices1,
            normals1,
            indices1
          ]
        ];
}

function createThreeGameObjectsAndSetPointData(state) {
  var vertices1 = new Float32Array(/* float array */[10]);
  var vertices2 = new Float32Array(/* float array */[
        3,
        2
      ]);
  var vertices3 = new Float32Array(/* float array */[
        5,
        3,
        2
      ]);
  var normals1 = new Float32Array(/* float array */[1]);
  var normals2 = new Float32Array(/* float array */[
        2,
        2
      ]);
  var normals3 = new Float32Array(/* float array */[
        5,
        1,
        2
      ]);
  var indices1 = new Uint16Array(/* int array */[2]);
  var indices2 = new Uint16Array(/* int array */[
        2,
        2
      ]);
  var indices3 = new Uint16Array(/* int array */[
        3,
        3,
        2
      ]);
  var match = createGameObject(state);
  var geometry1 = match[2];
  var match$1 = createGameObject(match[0]);
  var geometry2 = match$1[2];
  var match$2 = createGameObject(match$1[0]);
  var geometry3 = match$2[2];
  var state$1 = CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry3, indices3, CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry2, indices2, CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry1, indices1, CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry3, normals3, CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry2, normals2, CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry1, normals1, CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry3, vertices3, CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry2, vertices2, CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry1, vertices1, match$2[0])))))))));
  return /* tuple */[
          state$1,
          /* tuple */[
            match[1],
            match$1[1],
            match$2[1]
          ],
          /* tuple */[
            geometry1,
            geometry2,
            geometry3
          ],
          /* tuple */[
            vertices1,
            vertices2,
            vertices3
          ],
          /* tuple */[
            normals1,
            normals2,
            normals3
          ],
          /* tuple */[
            indices1,
            indices2,
            indices3
          ]
        ];
}

function getGroupCount(geometry, state) {
  return GroupCustomGeometryService$Wonderjs.getGroupCount(geometry, RecordCustomGeometryMainService$Wonderjs.getRecord(state));
}

function isGeometryDisposed(geometry, state) {
  return 1 - DisposeCustomGeometryMainService$Wonderjs.isAlive(geometry, RecordCustomGeometryMainService$Wonderjs.getRecord(state));
}

function getIndicesCount(index, state) {
  return GetCustomGeometryIndicesRenderService$Wonderjs.getIndicesCount(index, state);
}

function unsafeGetCustomGeometryComponent(uid, param) {
  var gameObjectRecord = param[/* gameObjectRecord */10];
  return Contract$WonderLog.ensureCheck((function () {
                return Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("type_ is box", "not"), (function () {
                              var match = GetComponentGameObjectService$Wonderjs.unsafeGetGeometryComponentData(uid, gameObjectRecord);
                              return Contract$WonderLog.Operators[/* = */0](match[1], CurrentComponentDataMapRenderService$Wonderjs.getCustomGeometryType(/* () */0));
                            }));
              }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData), GetComponentGameObjectService$Wonderjs.unsafeGetGeometryComponent(uid, gameObjectRecord));
}

exports.buildInfo                             = buildInfo;
exports.getInfo                               = getInfo;
exports.getRecord                             = getRecord;
exports.createGameObject                      = createGameObject;
exports.createGameObjectAndSetPointData       = createGameObjectAndSetPointData;
exports.createThreeGameObjectsAndSetPointData = createThreeGameObjectsAndSetPointData;
exports.getGroupCount                         = getGroupCount;
exports.isGeometryDisposed                    = isGeometryDisposed;
exports.getIndicesCount                       = getIndicesCount;
exports.unsafeGetCustomGeometryComponent      = unsafeGetCustomGeometryComponent;
/* Log-WonderLog Not a pure module */