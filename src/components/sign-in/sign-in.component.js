import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import CustomButton from '../button/custom-button.component';

export default class SignIn extends Component {

  state={
    email:'',
    password:''
  }


  handleSubmit = e => {
    e.preventDefault();
    this.setState({email:'', password:''})
  }

  handleChange = (e)=>{
    const {value, name} = e.target;
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput name='email' value={this.state.email} type='email' handleChange={this.handleChange} label = 'email' required/>
        

            <FormInput name='password' value={this.state.password} type='password' handleChange={this.handleChange} label='password' required/>
            

            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in With Google</CustomButton>

          </form>
        </div>
      </div>
    )
  }
}
