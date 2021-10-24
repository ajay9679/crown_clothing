import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors.js';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js';
import {connect} from 'react-redux';
import CollectionPreview from '../preview-collection/collection-preview.js';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
	return <div className='collections-overview'>
		{
			collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
		}
	</div>
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview);
