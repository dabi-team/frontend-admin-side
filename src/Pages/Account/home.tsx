import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import logo from "../../logo.svg";
import { useAppSelector } from "../../redux/hooks";

const Account = () => {
  const user = useAppSelector((state) => state.auth.auth);
  return (
    <div className="nav-container">
      <div className="white-card-container shadow-lg text-center ">
        <div className="grid grid-flow-row gap-4 content-center p-20 m-7">
          <img src={logo} alt="laptop" />
          <div className="text-5xl p-5">{user?.user.name}</div>
          <div className="text-2xl p-3">{user?.user.email}</div>
          <div className="text-2xl p-3">{user?.user.number}</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
