let hasTransform = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasTransform(
    gameObject->GameObjectEntity.value,
  );
};

let hasBSDFMaterial = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasBSDFMaterial(
    gameObject->GameObjectEntity.value,
  );
};

let hasGeometry = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasGeometry(
    gameObject->GameObjectEntity.value,
  );
};

let hasDirectionLight = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasDirectionLight(
    gameObject->GameObjectEntity.value,
  );
};

let hasBasicCameraView = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasBasicCameraView(
    gameObject->GameObjectEntity.value,
  );
};

let hasPerspectiveCameraProjection = gameObject => {
  DpContainer.unsafeGetGameObjectRepoDp().hasPerspectiveCameraProjection(
    gameObject->GameObjectEntity.value,
  );
};
