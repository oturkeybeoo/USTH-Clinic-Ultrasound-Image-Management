import React, { Component } from "react";
import styled from "styled-components";
import PatientRecord from "./PatientRecord";
const data = {
  no: "1",
  name: "Nguyen Van A",
  diseaes: "Disease A",
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
      <Patientcontainer>
        <div className="header-patients-list">
          <h2>Patients List</h2>
          <fomr>
            <input type="text" placeholder="&#128269; Searching..."></input>
            <label>FILTER BY:</label>
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </fomr>
        </div>
        <div className="title-grid-container">
          <div class="title-grid-item item1">No.</div>
          <div class="title-grid-item item2">Name</div>
          <div class="title-grid-item item3">Diseases</div>
          <div class="title-grid-item item4"></div>
        </div>
        {/* Try passing data */}
        <PatientRecord record={data} />

        {/* Try passing empty data */}
        <PatientRecord record="" />
        
      </Patientcontainer>
    );
  }
}

export default PatientList;
const Patientcontainer = styled.div`
  position: relative;
  top: 0;
  left: 20%;
  width: calc(100vw - 30%);
  height: 100%;
  padding: 3rem 4rem;
  background-color: #f7f7f7;
  .header-patients-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid 1px black;
    background-color: white;
    h2 {
    }
    label {
      margin: 1.5rem 0.5rem 0.4rem 0;
      font-weight: 700;
    }
    input {
      border-radius: 10px;
      line-height: 1.7rem;
      padding-left: 1rem;
      margin-right: 2rem;
      background-color: #e8e8e8;
    }
    select {
      border-radius: 10px;
      line-height: 1.7rem;
      background-color: #e8e8e8;
      font-size: 1.3rem;
      padding-right: 2rem;
    }
  }
  .title-grid-container {
    display: grid;
    grid-gap: 10px;
    background-color: white;
    grid-template-columns: 15% 15% 15% 55%;
    padding: 10px;
    border-bottom: solid 1px black;
    .title-grid-item {
      text-align: center;
      font-size: 0.8rem;
      font-weight: 700;
    }
    .item4 {
      grid-column: 4;
    }
  }
`;
