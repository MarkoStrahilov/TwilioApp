import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Route, useNavigate, Routes } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:2000/api/v1/current/user").then((res) => {
            setData(res.foundUser)
            setLoading(true)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })

    }, [])

    console.log(data)

    return ( 
        <div>
       {loading === false && (
            <Routes>
            <Route 
            {...rest}
            render={
                (props) => {
                    if(data.isAuthenticated === false){
                        return navigate("/sign-in")
                    }
                    return <Component {...props} />
                }
            }
            />
            </Routes>
        )}
       </div>
    )
}

export default ProtectedRoute