import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.js';
import CartDropdown from '../cart-dropdown/cart-dropdown.js';

const Header = ({currentUser, hidden}) => {

	return <div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>SHOP</Link>
			<Link className='option' to='/shop'>CONTACT</Link>
			{
				currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGNIN</Link>
			}
			<CartIcon />
		</div>
		{hidden && <CartDropdown />}
	</div>
};

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden,
})
export default connect(mapStateToProps)(Header);
