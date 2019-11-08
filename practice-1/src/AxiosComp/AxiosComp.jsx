import React from "react";
// const axios = require('axios') // before ES6
import axios from "axios"; // after ES6
import "./AxiosComp.scss"

class AxiosComp extends React.Component {
  componentDidMount() {
    axios
      .get("https://api.github.com/users/eastend-street/repos")
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
      });
  }
  render() {
    return <div className="AxiosComp">Hi</div>;
  }
}

export default AxiosComp;
