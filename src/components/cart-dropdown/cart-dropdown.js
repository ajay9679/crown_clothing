import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.js';
import CartItem from '../cart-item/cart-item.js';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-actions.js';

const CartDropdown = props => {
	return <div className='cart-dropdown'>
		<div className='cart-items'>
			{
				props.cartItems.length ? props.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : <span className='empty-message' >Your cart is empty</span>
			}
		</div>
		<CustomButton onClick={() => {
			props.history.push('/checkout')
			props.dispatch(toggleCartHidden());
		}} >
			GO TO CHECKOUT
		</CustomButton>
	</div>
};

const mapStateToProps = state => ({
	// cartItems: state.cart.cartItems
	cartItems: selectCartItems(state)
});



export default withRouter(connect(mapStateToProps, null)(CartDropdown));
