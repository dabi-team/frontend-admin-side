import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchAllBuy } from "../../redux/buy_now/buy_now_api_slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";

const Page3 = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.auth);
  const products = useAppSelector((state) => state.buynow.buynow);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchAllBuy());
  }, []);

  return <div className="nav-container"></div>;
};

export default Page3;
