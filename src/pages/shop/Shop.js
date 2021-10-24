import React from 'react';
import SHOP_DATA from './Shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.js';
import CollectionsOverview from '../../components/collections-overview/collections-overview.js';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.js';

const ShopPage = ({match}) => {
	console.log(match)
	return <div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
}

/*class ShopPage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			collections: SHOP_DATA
		}
	}

	render(){
		const {collections} = this.state;
		return <div className='shop-page'>
			{
				collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
			}
		</div>
	}
};*/


export default ShopPage;
