import React, { Component } from "react";
import styled from "styled-components";
import editIcon from "./images/edit_record.png";
import viewIcon from "./images/view_record.png";
import deleteIcon from "./images/delete_record.png";

export class PatientRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if( this.props.record !== "") {
          return (
            <PatientGridContainer>
              <div class="record-grid-item item1">{this.props.record.no}</div>
              <div class="record-grid-item item2">{this.props.record.name}</div>
              <div class="record-grid-item item3">
                {this.props.record.diseaes}
              </div>
              <div class="record-grid-item item4">
                <div className="view-record">
                  <img src={viewIcon} alt="View" />
                  <h2> View </h2>
                </div>
                <div className="edit-record">
                  <img src={editIcon} alt="Edit" />
                  <h2> Edit </h2>
                </div>
                <div className="delete-record">
                  <img src={deleteIcon} alt="Delete" />
                  <h2> Delete </h2>
                </div>
              </div>
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
  grid-template-columns: 8rem 10rem 10rem 24rem;
  padding: 10px;
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
      background-color: #ff0000;
      border-radius: 10px;
      line-height: 0.2rem;
      padding: 0 0.5rem;
    }
    .delete-record {
      background-color: #64c08a;
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
