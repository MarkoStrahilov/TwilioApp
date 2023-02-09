import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const [user,setUser] = useState({})
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      setLoader(true);
      axios
        .get("/api/v1/current/user")
        .then((res) => {
          setLoader(false);
          setUser(res?.data?.data?.user);
        })
        .catch((error) => {
          navigate("/sign-in");
          setLoader(false);
        });
    }, []);
  

    return {user,loader}
}

export default useAuth;