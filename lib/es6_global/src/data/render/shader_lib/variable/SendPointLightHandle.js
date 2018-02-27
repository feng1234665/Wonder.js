// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Caml_array                  from "../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Log$WonderLog               from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";
import * as Contract$WonderLog          from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as StateData$Wonderjs          from "../../../../core/StateData.js";
import * as ArraySystem$Wonderjs        from "../../../../structure/ArraySystem.js";
import * as PointLightAdmin$Wonderjs    from "../../../../ecs/admin/component/light/PointLightAdmin.js";
import * as GLSLSenderSystem$Wonderjs   from "../../../../renderer/shader/sender/GLSLSenderSystem.js";
import * as PointLightHelper$Wonderjs   from "../../../../ecs/component/data/light/point/PointLightHelper.js";
import * as ArraySystem$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArraySystem.js";
import * as GLSLLocationSystem$Wonderjs from "../../../../renderer/shader/location/GLSLLocationSystem.js";

function getLightGLSLDataStructureMemberNameArr() {
  return /* array */[
          /* record */[
            /* position */"u_pointLights[0].position",
            /* color */"u_pointLights[0].color",
            /* intensity */"u_pointLights[0].intensity",
            /* constant */"u_pointLights[0].constant",
            /* linear */"u_pointLights[0].linear",
            /* quadratic */"u_pointLights[0].quadratic",
            /* range */"u_pointLights[0].range"
          ],
          /* record */[
            /* position */"u_pointLights[1].position",
            /* color */"u_pointLights[1].color",
            /* intensity */"u_pointLights[1].intensity",
            /* constant */"u_pointLights[1].constant",
            /* linear */"u_pointLights[1].linear",
            /* quadratic */"u_pointLights[1].quadratic",
            /* range */"u_pointLights[1].range"
          ],
          /* record */[
            /* position */"u_pointLights[2].position",
            /* color */"u_pointLights[2].color",
            /* intensity */"u_pointLights[2].intensity",
            /* constant */"u_pointLights[2].constant",
            /* linear */"u_pointLights[2].linear",
            /* quadratic */"u_pointLights[2].quadratic",
            /* range */"u_pointLights[2].range"
          ],
          /* record */[
            /* position */"u_pointLights[3].position",
            /* color */"u_pointLights[3].color",
            /* intensity */"u_pointLights[3].intensity",
            /* constant */"u_pointLights[3].constant",
            /* linear */"u_pointLights[3].linear",
            /* quadratic */"u_pointLights[3].quadratic",
            /* range */"u_pointLights[3].range"
          ]
        ];
}

function _sendAttenuation(index, param, param$1, state) {
  var range = param$1[/* range */6];
  var quadratic = param$1[/* quadratic */5];
  var linear = param$1[/* linear */4];
  var constant = param$1[/* constant */3];
  var uniformLocationMap = param[3];
  var uniformCacheMap = param[2];
  var program = param[1];
  var gl = param[0];
  GLSLSenderSystem$Wonderjs.sendFloat(gl, uniformCacheMap, /* tuple */[
        constant,
        GLSLLocationSystem$Wonderjs.getUniformLocation(program, constant, uniformLocationMap, gl)
      ], PointLightAdmin$Wonderjs.getConstant(index, state));
  GLSLSenderSystem$Wonderjs.sendFloat(gl, uniformCacheMap, /* tuple */[
        linear,
        GLSLLocationSystem$Wonderjs.getUniformLocation(program, linear, uniformLocationMap, gl)
      ], PointLightAdmin$Wonderjs.getLinear(index, state));
  GLSLSenderSystem$Wonderjs.sendFloat(gl, uniformCacheMap, /* tuple */[
        quadratic,
        GLSLLocationSystem$Wonderjs.getUniformLocation(program, quadratic, uniformLocationMap, gl)
      ], PointLightAdmin$Wonderjs.getQuadratic(index, state));
  GLSLSenderSystem$Wonderjs.sendFloat(gl, uniformCacheMap, /* tuple */[
        range,
        GLSLLocationSystem$Wonderjs.getUniformLocation(program, range, uniformLocationMap, gl)
      ], PointLightAdmin$Wonderjs.getRange(index, state));
  return state;
}

function send(gl, param, state) {
  var uniformLocationMap = param[2];
  var uniformCacheMap = param[1];
  var program = param[0];
  Contract$WonderLog.requireCheck((function () {
          var maxCount = PointLightHelper$Wonderjs.getBufferMaxCount(/* () */0);
          return Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("max buffer count === 4", "is " + (String(maxCount) + "")), (function () {
                        return Contract$WonderLog.Operators[/* = */0](maxCount, 4);
                      }));
        }), StateData$Wonderjs.stateData[/* isDebug */1]);
  var lightGLSLDataStructureMemberNameArr = getLightGLSLDataStructureMemberNameArr(/* () */0);
  var match = PointLightAdmin$Wonderjs.getLightData(state);
  return ArraySystem$Wonderjs.reduceState((function (state, index) {
                var structureMemberNameData = Caml_array.caml_array_get(lightGLSLDataStructureMemberNameArr, index);
                var intensity = structureMemberNameData[/* intensity */2];
                var color = structureMemberNameData[/* color */1];
                var position = structureMemberNameData[/* position */0];
                GLSLSenderSystem$Wonderjs.sendVec3(gl, uniformCacheMap, /* tuple */[
                      position,
                      GLSLLocationSystem$Wonderjs.getUniformLocation(program, position, uniformLocationMap, gl)
                    ], PointLightAdmin$Wonderjs.getPosition(index, state));
                GLSLSenderSystem$Wonderjs.sendFloat3(gl, uniformCacheMap, /* tuple */[
                      color,
                      GLSLLocationSystem$Wonderjs.getUniformLocation(program, color, uniformLocationMap, gl)
                    ], PointLightAdmin$Wonderjs.getColor(index, state));
                GLSLSenderSystem$Wonderjs.sendFloat(gl, uniformCacheMap, /* tuple */[
                      intensity,
                      GLSLLocationSystem$Wonderjs.getUniformLocation(program, intensity, uniformLocationMap, gl)
                    ], PointLightAdmin$Wonderjs.getIntensity(index, state));
                return _sendAttenuation(index, /* tuple */[
                            gl,
                            program,
                            uniformCacheMap,
                            uniformLocationMap
                          ], structureMemberNameData, state);
              }), state, ArraySystem$WonderCommonlib.range(0, match[/* index */0] - 1 | 0));
}

export {
  getLightGLSLDataStructureMemberNameArr ,
  _sendAttenuation                       ,
  send                                   ,
  
}
/* Log-WonderLog Not a pure module */