import React from 'react';
import "./PatientLogin.css"

import Navbar from "../Navbar";
import Footer from '../Footer';

import { check_otp } from '../../../api/patient_api';

export default class PatientLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            otp: "",
            error_message: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeOtp = this.changeOtp.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const patient_email = localStorage.getItem("patient-email")
        check_otp(patient_email, this.state.otp).then(response => {
            window.location.href = "/view_profile/view_patient?id="+ response.data[0].id
        })
    }

    changeOtp(e) {
        this.setState({
            otp: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="patient-login-container">
                    <h2>We've sent you a code by email. Please enter it below</h2>
                    <span>Confirmation Code</span>
                    <form className='otp-form' onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.otp} onChange={this.changeOtp} className="otp-input" />
                        <button className="btn-submit-otp">SUBMIT</button>
                        <span className="message">{this.state.error_message}</span>
                    </form>
                    <span>If you have not received the confirmation code within 30 seconds, resend the code</span>
                </div>
                <Footer />
            </div>
        )
    }
}
