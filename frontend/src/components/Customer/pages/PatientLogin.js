import React from 'react';

export default class PatientLogin extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h2>We've sent you a code by email. Please enter it below</h2>
                <span>Confirmation Code</span>
                <form>
                    <input type="text" className="otp-input"/>
                    <button className="btn-submit">SUBMIT</button>
                    <span className="message"></span>
                </form>
                <span>If you have not received the confirmation code within 30 seconds, resend the code</span>
            </div>
        )
    }
}
