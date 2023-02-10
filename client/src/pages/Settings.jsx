import React from 'react'
import useAuth from '../hooks/useAuth'
import Nav from '../shared/Nav'
import Alerts from '../shared/Alert'
import { Code } from '@chakra-ui/react'




const Settings = () => {

    const {user, loading} = useAuth()
    console.log(user)

    return (
    <div>
    <Nav />
       <div style={{padding: "3rem 10rem"}}>
       {user.planActive === true && (
        <div>
            <Alerts className='px-5' message={"Use the application key to send messages with our API, activate a plan in order to receive your key."}/>
            <div className="mockup-window border border-base-300">
                <div className='px-4 py-8 border-t border-base-300'><code>Application key <Code>{user?.plan?.key}</Code></code></div>
            </div>
        </div>
       )}
       {user.planActive === false && (
            <Alerts message={"Use the application key to send messages with our API, activate a plan in order to receive your key."}/>
       )}
       </div>
    </div>
    )

}

export default Settings