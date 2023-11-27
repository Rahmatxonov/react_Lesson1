import React from "react";
import "../components/Header.css";
import UserList from "../components/Header";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <UserList />
      </div>
    </>
  );
};

export default HomePage;
