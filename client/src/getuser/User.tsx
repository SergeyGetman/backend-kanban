import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

  const deleteUser = async (userId?: string) => {
    if (!userId) return;

    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log("error delete", error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add user
        <i className="fa-solid fa-user-plus"></i>
      </Link>

      {users.length === 0 ? (
        <div className="noData">
          <h3>No data display</h3>
          <p>please added new user</p>
        </div>
      ) : (
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

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
