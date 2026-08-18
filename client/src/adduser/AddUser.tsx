import React from "react";
import "./adduser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i>
        Back
      </Link>
      <h3>Add new User</h3>
      <form action="" className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address::</label>
          <input
            type="text"
            id="address"
            autoComplete="off"
            placeholder="Enter your address"
          />
        </div>
        <div className="inputGroup">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
