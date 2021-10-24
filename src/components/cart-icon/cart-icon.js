import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions.js';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js';

const CartIcon = props => {
	return <div className='cart-icon' onClick={props.toggleCart} >
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count' >{props.numOfItems}</span>
	</div>
};

const mapStateToProps = state => {
	console.log('get called');
	// return { numOfItems: state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0) }
	return { numOfItems: selectCartItemsCount(state) }
};

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
