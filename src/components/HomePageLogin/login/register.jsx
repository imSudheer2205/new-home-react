import React from "react";
//
// import {useContext,useState} from 'react';
//
// import {MyContext} from './MyContext';

//import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reglogin" ref={this.props.containerRef}> 
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header"><h3>Register</h3></div>
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <input type="text" name="username" placeholder="Enter your first name" />
            </div>

            <div className="form-group">
              <label htmlFor="username">Last Name</label>
              <input type="text" name="username" placeholder="Enter your last name" />
            </div>
            
            <div className="form-control">
              <label htmlFor="gender">Gender</label>
              
                <td><input type="radio" value="Male" name="gender" /> Male </td>
                <td><input type="radio" value="Female" name="gender" /> Female </td>
                <td><input type="radio" value="Other" name="gender" /> Other </td>
              
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="integer" name="username" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
    

          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
      </div>
    );
  }
}



