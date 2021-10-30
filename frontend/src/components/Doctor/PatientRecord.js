import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


import { delete_patient } from "../../api/patient_api";
import "./css/PatientRecord.css"

export class PatientRecord extends Component {
  constructor(props) {
    super(props);

    this.onOpenDeletePopup = this.onOpenDeletePopup.bind(this);

    this.onOpenEditPopup = this.onOpenEditPopup.bind(this);

    this.onOpenViewPopup = this.onOpenViewPopup.bind(this);
  }
  onOpenDeletePopup(e) {
    delete_patient(this.props.patient_id).then(()=>{
      window.location.href = "/management"
    })
  }

  onOpenEditPopup(e) {
    window.location.href = "/management/edit_patient?id=" + this.props.patient_id
  }

  onOpenViewPopup(e) {
    window.location.href = "/management/view_patient?id=" + this.props.patient_id  
  }
 
  render() {
    if (this.props.record !== "") {
      return (
        <div className="patient-record-container">
          <span className="record-order">{this.props.record.order}</span>
          <span className="record-name">{this.props.record.name}</span>
          <span className="record-disease">{this.props.record.disease}</span>
          <div className="record-buttons">
            <div className="view-record" onClick={this.onOpenViewPopup}>
              <FontAwesomeIcon icon={faEye}/>
              <span>View</span>
            </div>
            <div className="edit-record" onClick={this.onOpenEditPopup}>
              <FontAwesomeIcon icon={faPen}/>
              <span>Edit</span>
            </div>
            <div className="delete-record" onClick={this.onOpenDeletePopup}>
            <FontAwesomeIcon icon={faTrash}/>
              <span>Delete</span>
            </div>
          </div>
          
        </div>
      );
    }
    return <div></div>;
  }
}

export default PatientRecord;

