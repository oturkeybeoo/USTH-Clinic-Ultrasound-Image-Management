import React, { Component } from "react";
import styled from "styled-components";
import editIcon from "./images/edit_record.png";
import viewIcon from "./images/view_record.png";
import deleteIcon from "./images/delete_record.png";

export class PatientRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deletePopup: false,
    };
    this.onOpenPopup = this.onOpenPopup.bind(this);
    this.onClosePopup = this.onClosePopup.bind(this);
    this.onDeleteRecord = this.onDeleteRecord.bind(this);
  }
  onOpenPopup(e) {
    this.setState({
      deletePopup: true,
    })
  }
  onClosePopup(e) {
    this.setState({
      deletePopup: false,
    });
  }
  onDeleteRecord(e) {
    this.onClosePopup();
  }
  render() {
    if (this.props.record !== "") {
      return (
        <PatientGridContainer>
          <div class="record-grid-item item1">{this.props.record.no}</div>
          <div class="record-grid-item item2">{this.props.record.name}</div>
          <div class="record-grid-item item3">{this.props.record.diseaes}</div>
          <div class="record-grid-item item4">
            <div className="view-record">
              <img src={viewIcon} alt="View" />
              <h2> View </h2>
            </div>
            <div className="edit-record">
              <img src={editIcon} alt="Edit" />
              <h2> Edit </h2>
            </div>
            <div className="delete-record" onClick={this.onOpenPopup}>
              <img src={deleteIcon} alt="Delete" />
              <h2> Delete </h2>
            </div>
          </div>
          <div
            className={
              this.state.deletePopup
                ? "delete-popup-show"
                : "delete-popup-hidden"
            }
          >
            <div className="pop-up">
              <div className="pop-up-header">
                <h2>Are you sure?</h2>
                <img
                  src={deleteIcon}
                  alt="Cancel"
                  onClick={this.onClosePopup}
                />
              </div>
              <div className="delete-popup-section">
                <div className="delete-popup-btn" onClick={this.onDeleteRecord}>
                  <img src={deleteIcon} alt="Delete" />
                  <h2>Delete</h2>
                </div>
              </div>
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
  .delete-popup-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(122, 119, 119, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    .pop-up {
      background-color: white;
      border-radius: 10px;
      width: 25%;
      height: 20%;
      .pop-up-header {
        border-bottom: solid black 1px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          background-color: black;
          height: 1.2rem;
        }
        img:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      .delete-popup-section {
        display: flex;
        justify-content: center;
        .delete-popup-btn {
          background-color: red;
          margin-top: 1rem;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 0.2rem;
          padding: 0 0.4rem;
          border-radius: 10%;
          font-size: 0.7rem;
          img {
            color: white;
            height: 1.5rem;
            margin-right: 0.3rem;
          }
          h2 {
            color: white;
          }
        }
        div:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
  }
  .delete-popup-hidden {
    display: none;
  }
`;
