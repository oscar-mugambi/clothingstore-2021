import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectionCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollections = (collectionUrlParam) =>
  createSelector(
    [selectionCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectionCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
