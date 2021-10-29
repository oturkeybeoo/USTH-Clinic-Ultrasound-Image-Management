import React, { Component } from "react";
import "./css/PatientForm.css"

export class CreatePatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      height: "",
      weight: "",
      insuranceCode: "",
      disease: "",
      discription: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeInsuranceCode = this.onChangeInsuranceCode.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onChangeDiscription = this.onChangeDiscription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  handleSubmit(e) {
    console.log(this.state);
    //Post API

    //Reset form
    this.setState({
      name: "",
      email: "",
      dob: "",
      height: "",
      weight: "",
      insuranceCode: "",
      dissease: "",
      discription: "",
      attachment: "",
    });
  }
  onChangeName(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  }
  onChangeDob(e) {
    this.setState({
      ...this.state,
      dob: e.target.value,
    });
  }
  onChangeHeight(e) {
    this.setState({
      ...this.state,
      height: e.target.value,
    });
  }
  onChangeWeight(e) {
    this.setState({
      ...this.state,
      weight: e.target.value,
    });
  }
  onChangeInsuranceCode(e) {
    this.setState({
      ...this.state,
      insuranceCode: e.target.value,
    });
  }
  onChangeDisease(e) {
    this.setState({
      ...this.state,
      disease: e.target.value,
    });
  }
  onChangeDiscription(e) {
    this.setState({
      ...this.state,
      discription: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      ...this.state,
      attachment: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="personal-infomation-container">
          <h2>Personal Infomation</h2>
          <form className="personal-info">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.onChangeName}/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.onChangeEmail}/>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={this.state.dob} onChange={this.onChangeDob}/>
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" value={this.state.height} onChange={this.onChangeHeight}/>
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" name="weight" value={this.state.weight} onChange={this.onChangeWeight}/>
            <label htmlFor="healthcode">Health Insurance Code</label>
            <input type="text" id="healthcode" name="healthcode" value={this.state.insuranceCode} onChange={this.onChangeInsuranceCode}/>
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
          <button onClick={this.handleSubmit}>Confirm</button>
        </div>
      </div>
    );
  }
}

export default CreatePatient;

