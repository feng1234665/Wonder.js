let convertToGameObjectIndexData =
    (
      {scenes, nodes, meshes, cameras, materials, extras, extensions}: GLTFType.gltf,
    )
    : WDType.gameObjectIndices => {
  let transformGameObjectIndexData =
    ConvertComponentIndexDataSystem.convertToTransformGameObjectIndexData(
      nodes,
    );
  {
    transformGameObjectIndexData,
    childrenTransformIndexData:
      ConvertChildrenDataSystem.convertToChildrenTransformIndexData(
        transformGameObjectIndexData,
        nodes,
      ),
    basicCameraViewGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToBasicCameraViewGameObjectIndexData(
        nodes,
      ),
    perspectiveCameraProjectionGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToPerspectiveCameraProjectionGameObjectIndexData(
        nodes,
        cameras,
      ),
    arcballCameraControllerGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToArcballCameraControllerGameObjectIndexData(
        nodes,
      ),
    basicMaterialGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToBasicMaterialGameObjectIndexData(
        nodes,
        meshes,
        materials,
      ),
    lightMaterialGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToLightMaterialGameObjectIndexData(
        nodes,
        meshes,
        materials,
      ),
    geometryGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToGeometryGameObjectIndexData(
        nodes,
      ),
    meshRendererGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToMeshRendererGameObjectIndexData(
        nodes,
        meshes,
      ),
    directionLightGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToLightGameObjectIndexData(
        "directional",
        nodes,
        extensions,
      ),
    pointLightGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToLightGameObjectIndexData(
        "point",
        nodes,
        extensions,
      ),
    scriptGameObjectIndexData:
      ConvertComponentIndexDataSystem.convertToScriptGameObjectIndexData(
        nodes,
      ),
  };
};