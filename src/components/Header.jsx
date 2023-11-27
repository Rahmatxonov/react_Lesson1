import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users?_limit=30"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Foydalanuvchilar ma'lumoti yuklanmadi:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="card">
      <h1 className="title">User List</h1>
      <div className="user-list-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <div className="user-details">
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <div className="btns">
                <button className="btns-btn">Todos</button>
                <button className="btns-btn">Posts</button>
                <button className="btns-btn">Galery</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
