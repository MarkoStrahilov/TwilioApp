import React from 'react'
import useAuth from '../hooks/useAuth'
import Nav from '../shared/Nav'
import Alerts from '../shared/Alert'

const Settings = () => {

    const {user, loading} = useAuth()

    return (
    <div>
        <Nav />
       <div style={{padding: "3rem 10rem"}}>
       <Alerts />
       </div>
    </div>
    )

}

export default Settings