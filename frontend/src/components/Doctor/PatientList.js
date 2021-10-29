import React, { Component } from "react";
import styled from "styled-components";
import PatientRecord from "./PatientRecord";
import "./css/PatientList.css"

const testData = {
  no: "1",
  name: "Nguyen Van A",
  disease: "Disease A",
};

export class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deletePopup: false,
    };
  }

  render() {
    return (
      <div className="patient-container">
        <div className="header-patients-list">
          <h2>Patients List</h2>
          <form>
            <input className="search-input" type="text" placeholder="Search"></input>
            <label>FILTER BY:</label>
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
        <div className="title-container">
          <span className="title-number">No.</span>
          <span className="title-name">Name</span>
          <span className="title-disease">Diseases</span>
          <span className="title-placeholder"></span>
        </div>
        
        {/* Try passing data */}
        <PatientRecord record={testData} />

        {/* Try passing empty data */}
        <PatientRecord record="" />

      </div>
    );
  }
}

export default PatientList;

