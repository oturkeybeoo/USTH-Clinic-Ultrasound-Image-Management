import React, { Component } from "react";
import PatientRecord from "./PatientRecord";
import { get_all_patients } from "../../api/patient_api";
import "./css/PatientList.css"

export class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deletePopup: false,
      patient_list: []
    };
  }

  componentDidMount(){
    get_all_patients().then(response => {
      this.setState({
        patient_list: response.data
      })
    })
  }

  render() {
    return (
      <div className="patient-container">
        <div className="header-patients-list">
          <h2>Patients List</h2>
          <form>
            <input className="search-input" type="text" placeholder="Search"></input>
          </form>
        </div>
        <div className="title-container">
          <span className="title-number">ID</span>
          <span className="title-name">Name</span>
          <span className="title-disease">Diseases</span>
          <span className="title-placeholder"></span>
        </div>
        
        {
          this.state.patient_list.map((patient) => {
            return <PatientRecord patient_id={patient.id} record={{
              order: patient.id,
              name: patient.patience_name,
              disease: patient.patience_disease
            }} key={patient.id} />
          })
        }

      </div>
    );
  }
}

export default PatientList;

