import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import "./css/PatientProfile.css"
import ImageSlideView from "./ImageSlideView";

import { get_images, get_patient } from "../../api/patient_api";

export default class PatientProfile extends Component{
    constructor(props){
        super(props)

        this.state = {
            images: [],
            patient_disease: "",
            patient_name: "",
            description: "",    
            patient_age: undefined
        }
    }

    handleClickBack(){
        window.location.href = "/management"
    }

    componentDidMount(){
        const patient_id = new URLSearchParams(this.props.location.search).get("id")
        get_patient(patient_id).then(response => {
            this.setState({
                patient_name: response.data.patience_name,
                patient_age: response.data.patience_age,
                patient_disease: response.data.patience_disease
            })
        })
        get_images().then(response => {
            let images = []
            response.data.forEach(image => {
                if (String(image.patience_id) == patient_id) {
                    images.push(image)
                }
            })
            this.setState({images: images})
        })
    }

    render(){
        return (
            <div className="patient-profile-container">
                <div className="previous-page-btn">
                    <div onClick={this.handleClickBack}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span> Back</span>
                    </div>
                </div>
                <div className="patient-info-container">
                    <div className="patient-info">
                        <div className="dianogsis-container">
                            <span >Dianogsis: </span>
                            <span>{this.state.patient_disease}</span>
                        </div>
                        <div className="patient-name-container">
                            <span>Patient: </span>
                            <span>{this.state.patient_name}</span>
                        </div>
                        <div>
                            <span className="patient-age-container">Age: </span>
                            <span>{this.state.patient_age}</span>
                        </div>
                    </div>
                    {/* <div>
                        <span>Description:</span>
                        <span>{this.state.description}</span>
                    </div> */}
                </div>
                <ImageSlideView className="patient-image-slide-view" images={this.state.images}/>
            </div>
        )
    }
}
