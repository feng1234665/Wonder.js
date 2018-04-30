// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Log$WonderLog                          from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";
import * as Contract$WonderLog                     from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as ArrayService$Wonderjs                  from "../../../atom/ArrayService.js";
import * as StateDataMain$Wonderjs                 from "../data/StateDataMain.js";
import * as IsDebugMainService$Wonderjs            from "../state/IsDebugMainService.js";
import * as AddComponentService$Wonderjs           from "../../../primitive/component/AddComponentService.js";
import * as HasComponentGameObjectService$Wonderjs from "../../../record/main/gameObject/HasComponentGameObjectService.js";

function _setRenderGameObjectArray(_, gameObject, renderGameObjectArray) {
  return ArrayService$Wonderjs.push(gameObject, renderGameObjectArray);
}

function handleAddComponent(meshRenderer, gameObjectUid, state) {
  var gameObjectRecord = state[/* gameObjectRecord */10];
  var meshRendererRecord = state[/* meshRendererRecord */22];
  var lightMaterialRenderGameObjectArray = meshRendererRecord[/* lightMaterialRenderGameObjectArray */2];
  var basicMaterialRenderGameObjectArray = meshRendererRecord[/* basicMaterialRenderGameObjectArray */1];
  var match = HasComponentGameObjectService$Wonderjs.hasBasicMaterialComponent(gameObjectUid, gameObjectRecord);
  var basicMaterialRenderGameObjectArray$1 = match !== 0 ? ArrayService$Wonderjs.push(gameObjectUid, basicMaterialRenderGameObjectArray) : basicMaterialRenderGameObjectArray;
  var match$1 = HasComponentGameObjectService$Wonderjs.hasLightMaterialComponent(gameObjectUid, gameObjectRecord);
  var lightMaterialRenderGameObjectArray$1 = match$1 !== 0 ? ArrayService$Wonderjs.push(gameObjectUid, lightMaterialRenderGameObjectArray) : lightMaterialRenderGameObjectArray;
  var newrecord = state.slice();
  return Contract$WonderLog.ensureCheck((function (state) {
                return Contract$WonderLog.test(Log$WonderLog.buildAssertMessage("should add material component before add meshRenderer component", "not. the gameObjectUid is " + (String(gameObjectUid) + "")), (function () {
                              var match = state[/* meshRendererRecord */22];
                              return Contract$WonderLog.assertTrue(+(match[/* basicMaterialRenderGameObjectArray */1].includes(gameObjectUid) || match[/* lightMaterialRenderGameObjectArray */2].includes(gameObjectUid)));
                            }));
              }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData), (newrecord[/* meshRendererRecord */22] = /* record */[
                /* index */meshRendererRecord[/* index */0],
                /* basicMaterialRenderGameObjectArray */basicMaterialRenderGameObjectArray$1,
                /* lightMaterialRenderGameObjectArray */lightMaterialRenderGameObjectArray$1,
                /* gameObjectMap */AddComponentService$Wonderjs.addComponentToGameObjectMap(meshRenderer, gameObjectUid, meshRendererRecord[/* gameObjectMap */3]),
                /* disposedIndexArray */meshRendererRecord[/* disposedIndexArray */4]
              ], newrecord));
}

export {
  _setRenderGameObjectArray ,
  handleAddComponent        ,
  
}
/* Log-WonderLog Not a pure module */