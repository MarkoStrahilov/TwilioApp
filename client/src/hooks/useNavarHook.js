import { useState, useEffect } from "react";
import axios from "axios";

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

   return {user,loader}
}

export default PublicNavbar