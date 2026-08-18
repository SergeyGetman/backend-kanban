import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";

export type IUsers = {
  _id?: string;
  email: string;
  name: string;
  address: string;
};

const User = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IUsers[]>(
          "http://localhost:8000/api/users",
        );
        setUsers(response.data);

        console.log("trhis is responce", response);
      } catch (error) {
        console.error("ERROR fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add user
        <i className="fa-solid fa-user-plus"></i>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"> SOL</th>
            <th scope="col"> NAME</th>
            <th scope="col"> Email</th>
            <th scope="col"> Adress</th>
            <th scope="col"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td className="actionsButtons">
                  <Link
                    to={`/update/` + user._id}
                    type="button"
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>

                  <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
