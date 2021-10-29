import React, { Component } from "react";
import styled from "styled-components";
export class EditPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <EditDiv>
        <div
          className={
            this.props.editPopup ? "edit-popup-show" : "edit-popup-hidden"
          }
        >
          <div className="left-content">
            <h2>Personal Infomation</h2>
            <form className="personal-info">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.onChangeName}
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              ></input>
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={this.state.dob}
                onChange={this.onChangeDob}
              ></input>
              <label htmlFor="height">Height</label>
              <input
                type="text"
                id="height"
                name="height"
                value={this.state.height}
                onChange={this.onChangeHeight}
              ></input>
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={this.state.weight}
                onChange={this.onChangeWeight}
              ></input>
              <label htmlFor="healthcode">Health Insurance Code</label>
              <input
                type="text"
                id="healthcode"
                name="healthcode"
                value={this.state.insuranceCode}
                onChange={this.onChangeInsuranceCode}
              ></input>
            </form>
          </div>
          <div className="mid-content">
            <h2>Diagnosis Infomation</h2>
            <form className="diagnosis-info">
              <label htmlFor="disease">Disease</label>
              <input
                type="text"
                id="disease"
                name="disease"
                value={this.state.disease}
                onChange={this.onChangeDisease}
              ></input>
              <label htmlFor="discription">Discription</label>
              <textarea
                id="discription"
                name="discription"
                rows="4"
                cols="20"
                value={this.state.discription}
                onChange={this.onChangeDiscription}
              />
            </form>
          </div>
          <div className="right-content">
            <h2>Ultrasound images</h2>
            <form className="ultrasound-image">
              <input type="file" onChange={this.onChangeImage} />
            </form>
            <div className="edit-btn-handler">
              <button onClick={this.props.onSaveEditRecord}>Confirm</button>
              <button onClick={this.props.onCloseEditPopup}>Cancel</button>
            </div>
          </div>
        </div>
      </EditDiv>
    );
  }
}

export default EditPopup;
const EditDiv = styled.div`
  .edit-popup-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(122, 119, 119, 0.9);
    display: flex;
    justify-content: space-evenly;

    .left-content {
      margin-top: 4rem;
      h2 {
        margin: 0 0 1rem 0;
        border-radius: 10px;
        color: white;
        background-color: #2bc4f3;
        padding: 0.5rem 2rem;
      }
      .personal-info {
        display: flex;
        flex-direction: column;
        label {
          margin: 1.5rem 0 0.4rem 0;
          font-weight: 700;
        }
        input {
          border-radius: 10px;
          line-height: 1.7rem;
          padding-left: 1rem;
          background-color: #e8e8e8;
        }
      }
    }
    .mid-content {
      margin-top: 4rem;
      h2 {
        margin: 0 0 1rem 0;
        border-radius: 10px;
        color: white;
        background-color: #64c08a;
        padding: 0.5rem 2rem;
      }
      .diagnosis-info {
        display: flex;
        flex-direction: column;
        label {
          margin: 1.5rem 0 0.4rem 0;
          font-weight: 700;
        }
        input {
          border-radius: 10px;
          line-height: 1.7rem;
          padding-left: 1rem;
          background-color: #e8e8e8;
        }
        textarea {
          border-radius: 10px;
          line-height: 1.7rem;
          padding-left: 1rem;
          background-color: #e8e8e8;
        }
      }
    }
    .right-content {
      margin-top: 4rem;
      position: relative;
      h2 {
        margin: 0 0 1rem 0;
        border-radius: 10px;
        color: white;
        background-color: #ff0000;
        padding: 0.5rem 2rem;
      }
      .ultrasound-image {
        display: flex;
        flex-direction: column;
        input {
          margin: 3.5rem 0 0 0;
          border-radius: 10px;
          padding-left: 1rem;
        }
      }
      .edit-btn-handler{
          display: flex;
          flex-direction: column;
      } button {
        color: white;
        padding: 0 5rem;
        background-color: #0f4252;
        border-radius: 10px;
        line-height: 2.5rem;
        position: relative;
        bottom: -20rem;
        font-size: 1.5rem;
      }
      button:last-child{
          background-color: red;
          margin-top: 1rem;
      }
      button:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  .edit-popup-hidden {
    display: none;
  }
`;
