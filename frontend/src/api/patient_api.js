const axios = require('axios');

export const get_all_patients = () => {
  return axios.get('http://127.0.0.1:8000/api/patiences/')
}

export const create_patient = (name, email, disease, weight, height, age, insurance_code) => {
  return axios.post("http://127.0.0.1:8000/api/patiences/", {
    data: {
      patience_name: name,
      patience_gender: "Male",
      patience_weight: weight,
      patience_height: height,
      patience_age: age,
      patience_disease: disease,
      patience_address: "Hanoi",
      patience_phone: "81726381287",
      patience_email: email,
      patience_insurance: insurance_code
    }
  })
}

export const edit_patient = (id, name, email, disease, weight, height, age, insurance_code) => {
  return axios.put("http://127.0.0.1:8000/api/patiences/" + id, {
    data: {
      patience_name: name,
      patience_gender: "Male",
      patience_weight: weight,
      patience_height: height,
      patience_age: age,
      patience_disease: disease,
      patience_address: "Hanoi",
      patience_phone: "81726381287",
      patience_email: email,
      patience_insurance: insurance_code
    }
  })
}

export const post_image = (image, title, description, patience_id, doctor_id) => {
  const schema = {
    picture_title: title,
    picture_description: description,
    patience_id: patience_id,
    doctor_id: doctor_id
  }

  const formData = new FormData();

  formData.append(
    "image",
    image,
    image.name
  );
  formData.append("data", JSON.stringify(schema))
  
  axios.post("http://127.0.0.1:8000/api/patience_pictures/", formData);
}

export const get_images = () => {
  return axios.get("http://127.0.0.1:8000/api/patience_pictures/")
}

export const get_patient = id => {
  return axios.get("http://127.0.0.1:8000/api/patiences/"+id)
}