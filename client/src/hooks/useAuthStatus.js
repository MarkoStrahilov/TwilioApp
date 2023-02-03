import { useState, useEffect } from 'react';
import axios from 'axios'

export const useAuthStatus = async() => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checking, setCheckingStatus] = useState(true)

    const user = await axios.get("http://localhost:2000/api/v1/current/user")

    useEffect(() => {
        console.log(user)
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)

    }, [user])

    return { loggedIn, checking }
}