import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import "./css/PatientProfile.css"
import ImageSlideView from "./ImageSlideView";

export default class PatientProfile extends Component{
    render(){
        return (
            <div className="patient-profile-container">
                <div className="previous-page-btn">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Back</span>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div className="patient-info">
                        <div className="dianogsis-container">
                            <span >Dianogsis:</span>
                            <span>{this.props.patient_disease}</span>
                        </div>
                        <div className="patient-name-container">
                            <span>Patient:</span>
                            <span>{this.props.patient_name}</span>
                        </div>
                        <div>
                            <span className="patient-age-container">Age:</span>
                            <span>{this.props.age}</span>
                        </div>
                    </div>
                    {/* <div>
                        <span>Description:</span>
                        <span>{this.props.description}</span>
                    </div> */}
                </div>
                <ImageSlideView className="patient-image-slide-view"/>
            </div>
        )
    }
}
