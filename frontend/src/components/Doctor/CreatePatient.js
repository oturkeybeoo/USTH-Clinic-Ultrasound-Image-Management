import React, { Component } from "react";
import ImageUploading from "react-images-uploading";

import { create_patient, post_image } from "../../api/patient_api";

import "./css/PatientForm.css"

export class CreatePatient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      name: "",
      email: "",
      age: "",
      height: "",
      weight: "",
      insuranceCode: "",
      disease: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeInsuranceCode = this.onChangeInsuranceCode.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    create_patient(this.state.name,
                   this.state.email,
                   this.state.disease,
                   this.state.weight,
                   this.state.height,
                   this.state.age,
                   this.state.insuranceCode)
    .then(response => {
      this.state.images.forEach(image => {
        post_image(image.file,"Ultrasound Image",this.state.description,response.data.id,1)
      })
    }).then(()=>{
      window.location.href = "/management"
    })

    
    
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
  onChangeAge(e) {
    this.setState({
      ...this.state,
      age: e.target.value,
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
  onChangeDescription(e) {
    this.setState({
      ...this.state,
      description: e.target.value,
    });
  }

  onChangeImage (imageList, addUpdateIndex) {
    this.setState({
      images: imageList
    })
  };

  render() {
    return (
      <div className="patient-form">
        <div className="personal-infomation-container sub-form-container">
          <h2>Personal Infomation</h2>
          <form className="personal-info sub-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.onChangeName} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.onChangeEmail} />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={this.state.age} onChange={this.onChangeAge} />
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" value={this.state.height} onChange={this.onChangeHeight} />
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" name="weight" value={this.state.weight} onChange={this.onChangeWeight} />
            <label htmlFor="healthcode">Health Insurance Code</label>
            <input type="text" id="healthcode" name="healthcode" value={this.state.insuranceCode} onChange={this.onChangeInsuranceCode} />
          </form>
        </div>

        <div className="diagnosis-information-container sub-form-container">
          <h2>Diagnosis Infomation</h2>
          <form className="diagnosis-info sub-form">
            <label htmlFor="disease">Disease</label>
            <input type="text" id="disease" name="disease" value={this.state.disease} onChange={this.onChangeDisease} />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" cols="20" value={this.state.description} onChange={this.onChangeDescription} />
          </form>
        </div>
        <div className="ultrasound-images-container sub-form-container">
          <h2>Ultrasound images</h2>
            <ImageUploading
              multiple
              value={this.state.images}
              onChange={this.onChangeImage}
              maxNumber={4}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                <div className="upload__image-wrapper">
                  <button
                    className="btn-add-image"
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                 
                 <div className="selected-image-container">
                 {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image.data_url} alt="" className="selected-image" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                 </div>
                  
                </div>
              )}
            </ImageUploading>
            <button className="btn-submit" onClick={this.handleSubmit}>Confirm</button>
        </div>
      </div>
    );
  }
}

export default CreatePatient;

