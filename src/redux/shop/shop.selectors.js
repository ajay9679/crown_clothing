import { createSelector } from 'reselect';
import _ from 'lodash';

/*const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};*/ //FOR ARRAY

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

// export const selectCollectionsForPreview = createSelector([selectCollections], collections => Object.keys(collections).map(key => collections[key]));

export const selectCollectionsForPreview = createSelector([selectCollections], collections => _.map(_.keys(collections)).map(key => collections[key]));

// export const selectCollection = collectionUrlParam => createSelector([selectCollections], collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])); //FOR ARRAY

export const selectCollection = collectionUrlParam => createSelector([selectCollections], collections => collections[collectionUrlParam]); // //FOR OBJECT
