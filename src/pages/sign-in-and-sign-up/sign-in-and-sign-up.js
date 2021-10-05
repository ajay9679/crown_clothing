import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.js';
import SignUp from '../../components/sign-up/sign-up.js';

const SignInAndSignUp = () => {
	return <div>
		<SignIn />
		<SignUp />
	</div>
};

export default SignInAndSignUp;
