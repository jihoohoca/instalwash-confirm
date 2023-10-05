import React from "react";
import './confirmedemail.css'

const index = () => {
  return (
    <div className="container">
      <div className="success-icon">
        <i className="fas fa-check-circle"></i>
      </div>
      <h1 className="email-confirmed">Email Confirmed</h1>
      <p className="email-successfully">Your email has been successfully confirmed.</p>
      <p className="email-thank">Thank you for verifying your email address.</p>
    </div>
  );
};

export default index;
