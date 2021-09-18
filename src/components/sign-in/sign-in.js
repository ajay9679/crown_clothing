import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.js'
import CustomButton from '../custom-button/custom-button.js';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			email: '',
			password: '',
		});
	}

	handleChange = e => {
		const {value, name} = e.target;
		this.setState({[name]: value});
	}

	render(){
		return <div className='sign-in'>
			<h2>Already Have an Account ?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handleSubmit}>
				<FormInput name='email' type='email' value={this.state.email} label='email' handleChange={this.handleChange} required />
				<FormInput name='password' type='password' value={this.state.password} label='password' handleChange={this.handleChange} required />

				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	}
}

export default SignIn;
