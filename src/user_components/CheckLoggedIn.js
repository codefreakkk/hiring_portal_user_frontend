import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CheckLoggedIn() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) navigate("/");
    // need to work on else part
    // if logged in then authencticate on backend side
  });

  return <></>;
}

export default CheckLoggedIn;
