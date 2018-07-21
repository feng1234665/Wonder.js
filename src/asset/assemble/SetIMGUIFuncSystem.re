open WDType;

let setIMGUIFunc = ({scene}, state) =>
  OptionService.isJsonSerializedValueNone(scene.imgui) ?
    state :
    {
      let {imguiFunc, customData}: SceneGraphType.imgui =
        OptionService.unsafeGetJsonSerializedValue(scene.imgui);

      ManageIMGUIMainService.setIMGUIFunc(
        customData,
        imguiFunc |> SerializeService.deserializeFunction,
        state,
      );
    };