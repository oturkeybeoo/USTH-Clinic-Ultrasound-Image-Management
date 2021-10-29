import React, { Component } from "react";
import DeletePopup from "./DeletePopup";
import EditPopup from "./EditPopup";
import ViewPopup from "./ViewPopup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./css/PatientRecord.css"

export class PatientRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deletePopup: false,
      editPopup: false,
      viewPopup: false,
    };
    this.onOpenDeletePopup = this.onOpenDeletePopup.bind(this);
    this.onCloseDeletePopup = this.onCloseDeletePopup.bind(this);
    this.onDeleteRecord = this.onDeleteRecord.bind(this);

    this.onOpenEditPopup = this.onOpenEditPopup.bind(this);
    this.onCloseEditPopup = this.onCloseEditPopup.bind(this);
    this.onSaveEditRecord = this.onSaveEditRecord.bind(this);

    this.onOpenViewPopup = this.onOpenViewPopup.bind(this);
    this.onCloseViewPopup = this.onCloseViewPopup.bind(this);
  }
  onOpenDeletePopup(e) {
    this.setState({
      deletePopup: true,
    });
  }
  onCloseDeletePopup(e) {
    this.setState({
      deletePopup: false,
    });
  }
  onDeleteRecord(e) {
    this.onCloseDeletePopup();
  }

  onOpenEditPopup(e) {
    this.setState({
      editPopup: true,
    });
  }
  onCloseEditPopup(e) {
    this.setState({
      editPopup: false,
    });
  }
  onSaveEditRecord(e) {
    this.onCloseEditPopup();
  }

  onOpenViewPopup(e) {
    window.location.href = "/management/view_patient"
  }
  onCloseViewPopup(e) {
    this.setState({
      viewPopup: false,
    });
  }
  render() {
    if (this.props.record !== "") {
      return (
        <div className="patient-record-container">
          <span className="record-order">{this.props.record.no}</span>
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
          {/* <DeletePopup
            deletePopup={this.state.deletePopup}
            onCloseDeletePopup={this.onCloseDeletePopup}
            onDeleteRecord={this.onDeleteRecord}
          />
          <EditPopup
            editPopup={this.state.editPopup}
            onCloseEditPopup={this.onCloseEditPopup}
            onSaveEditRecord={this.onSaveEditRecord}
          />
          <ViewPopup
            viewPopup={this.state.viewPopup}
            onCloseViewPopup={this.onCloseViewPopup}
          /> */}
        </div>
      );
    }
    return <div></div>;
  }
}

export default PatientRecord;

