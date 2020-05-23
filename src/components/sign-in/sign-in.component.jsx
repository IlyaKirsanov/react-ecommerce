import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componnent';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';


class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: '', password: '' })
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='sign-in'>
				<h1>I already have an account</h1>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit} >
					<label htmlFor="email">
						<FormInput
							type="email"
							name="email"
							handleChange={this.handleChange}
							value={this.state.email}
							label='email'
							required />
					</label>
					<label htmlFor="password">
						<FormInput
							type="password"
							name="password"
							handleChange={this.handleChange}
							value={this.state.password}
							label='password'
							required />
					</label>

					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
				</form>

			</div>
		);
	}
}

export default SignIn;