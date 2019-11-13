import React from "react";

const AboutPage = ({ match, history, location }) => {
  console.log(match, history, location);
  return (
    <>
      <div>This is the AboutPage!</div>
      <button onClick={() => history.push("/")}>Go to home and refresh!</button>
    </>
  );
};

export default AboutPage;
