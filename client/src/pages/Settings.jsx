
import React from 'react'
import useAuth from '../hooks/useAuth'
import Nav from '../shared/Nav'
import Alerts from '../shared/Alert'
import { Code } from '@chakra-ui/react'
import SettingsNotVerified from '../components/SettingsNotVerified'
import SettingsVerified from '../components/SettingsVerified'


const Settings = () => {

    const {user, loading} = useAuth()

    if(loading) {
        return <h1>Loading</h1>
    }

    return (
    <div>
    <Nav />
       <div style={{padding: "3rem 10rem"}}>
            {user.planActive ? <SettingsVerified user={user}/> : <SettingsNotVerified />}
        </div>
    </div>
    )

}

export default Settings