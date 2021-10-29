const axios = require('axios');

export const get_all_patients = () => {
    axios.get('http://127.0.0.1:8000/api/patiences/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .then(function () {
      
    });
}
