import React from 'react';

import { send_otp_via_email } from '../../api/patient_api';

import './HeroSection.css';

class HeroSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.submitEmail = this.submitEmail.bind(this)
  }

  onChangeEmail(e) {
    console.log(this.props.location)
    this.setState({
      email: e.target.value 
    })
  }

  submitEmail(e){
    e.preventDefault()
    send_otp_via_email(this.state.email).then(response => {
      localStorage.setItem("patient-email", this.state.email)
      window.location.pathname = '/patient_login'
    })
  } 

  render(){
    return (
      <div className='hero-container'>
        
        <h1>Making Health</h1>
        <h1>Care Better Together</h1>
        <p>The website of Medcare for storing Ultrasound image</p>
        <div>
            <form onSubmit={this.submitEmail}>
              <input value={this.state.email} onChange={this.onChangeEmail} className='footer-input' name='email' type='email' placeholder='Enter your email for viewing ultrasound images'/>
              <button className='btn-mobile'>Submit</button>
            </form>
          </div>
      </div>
    );
  }
}

export default HeroSection;
