import "./updateUser.css";
import React, { useEffect, useState } from "react";
import "./updateUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IUsers } from "../getuser/User";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../config";

const UpdateUser = () => {
  const users: IUsers = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState<IUsers>(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    console.log("this is name", name, value);

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .put(`${API_URL}/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i>
        Back
      </Link>
      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            autoComplete="off"
            onChange={inputHandler}
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            autoComplete="off"
            onChange={inputHandler}
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Address::</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            autoComplete="off"
            onChange={inputHandler}
            placeholder="Enter your address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
