import { useState, useEffect } from "react";
import React from 'react'
import Loader from '../shared/Loader'
import Nav from '../shared/Nav'
import Navbar from '../pages/Navbar'

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PublicNavbar = () => {
    
    const [user, setUser] = useState(undefined)
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        axios
          .get("/api/v1/current/user")
          .then((res) => {
            setLoader(false);
            setUser(res?.data?.data?.user);
          })
          .catch((error) => {
            setLoader(false);
          });
      }, []);

      console.log(user)

    if(loader) return loader

    if(user === undefined) {

      return (
        <Navbar />
      )
    }

    return (
      <Nav />
    )
}

export default PublicNavbar