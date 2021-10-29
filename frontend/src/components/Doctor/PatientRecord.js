import React, { Component } from "react";
import styled from "styled-components";
import editIcon from "./images/edit_record.png";
import viewIcon from "./images/view_record.png";
import deleteIcon from "./images/delete_record.png";
import DeletePopup from "./DeletePopup";
import EditPopup from "./EditPopup";
import ViewPopup from "./ViewPopup";

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
    this.setState({
      viewPopup: true,
    });
  }
  onCloseViewPopup(e) {
    this.setState({
      viewPopup: false,
    });
  }
  render() {
    if (this.props.record !== "") {
      return (
        <PatientGridContainer>
          <div class="record-grid-item item1">{this.props.record.no}</div>
          <div class="record-grid-item item2">{this.props.record.name}</div>
          <div class="record-grid-item item3">{this.props.record.diseaes}</div>
          <div class="record-grid-item item4">
            <div className="view-record" onClick={this.onOpenViewPopup}>
              <img src={viewIcon} alt="View" />
              <h2> View </h2>
            </div>
            <div className="edit-record" onClick={this.onOpenEditPopup}>
              <img src={editIcon} alt="Edit" />
              <h2> Edit </h2>
            </div>
            <div className="delete-record" onClick={this.onOpenDeletePopup}>
              <img src={deleteIcon} alt="Delete" />
              <h2> Delete </h2>
            </div>
          </div>
          <DeletePopup
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
          />
        </PatientGridContainer>
      );
    }
    return <div></div>;
  }
}

export default PatientRecord;

const PatientGridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 15% 15% 15% 55%;
  padding: 10px;
  background-color: white;
  .record-grid-item {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item4 {
    grid-column: 4;
    display: flex;
    justify-content: center;
    color: white;
    .view-record {
      background-color: #2bc4f3;
      border-radius: 10px;
      line-height: 0.2rem;
      padding: 0 0.5rem;
    }
    .edit-record {
      background-color: #64c08a;
      border-radius: 10px;
      line-height: 0.2rem;
      padding: 0 0.5rem;
    }
    .delete-record {
      background-color: #ff0000;
      border-radius: 10px;
      line-height: 0.2rem;
      padding: 0 0.5rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0.8rem;
      img {
        height: 1.5rem;
      }
      h2 {
        margin-left: 0.3rem;
      }
    }
    div:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: 0.3s ease-in-out;
    }
  }
`;
