import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, useNavigate, Routes } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/v1/current/user")
      .then((res) => {
        setData(res.user);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default ProtectedRoute;
