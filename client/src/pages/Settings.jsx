import { React, useState } from 'react'
import useAuth from '../hooks/useAuth'
import Nav from '../shared/Nav'
import Alerts from '../shared/Alert'
import { Code } from '@chakra-ui/react'
import SettingsNotVerified from '../components/SettingsNotVerified'
import SettingsVerified from '../components/SettingsVerified'
import Loader from '../shared/Loader'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Button,
    Heading,
    Text,
    Spacer,
    Divider
} from '@chakra-ui/react';


const Settings = () => {

    const [userData, setUserData] = useState({
        username: "",
        email: ""
    })
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [retypeNewPassword, setRetypeNewPassword] = useState("");

    const { user, loading } = useAuth()

    const handleUpdateUser = async (e) => {
        console.log(userData)
    }

    const handlePasswordChange = async () => {
        try {
            if (oldPassword === '' || newPassword === '' || retypeNewPassword === '') {
                toast.error("make sure to fill out the required fields");
            } else {
                const data = { oldPassword, newPassword, retypeNewPassword }
                const res = await axios.put(`/api/v1/update/password?id=${user._id}`, data);
                toast.success("password was successfuly updated")
                console.log(res)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }


    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Nav />
            <div style={{ padding: "3rem 10rem" }}>
                {user.planActive ? <SettingsVerified user={user} /> : <SettingsNotVerified />}
                <Divider />
                <Box>
                    <Flex>
                        <Box p='4' flex='2'>
                            <Text fontSize='3xl' color={'gray.600'} margin={"2rem 0"} >
                                Your account info on our service
                            </Text>
                            <Text fontSize='sm' color={'gray.600'}>
                              Here you can see your personal info and options to change, update and manage it based on your prefrencess and ideas
                            </Text> 
                        </Box>
                        <Spacer />
                        <Box p='4' flex='2'>
                            <FormControl id="firstName" margin={'1rem 0'}>
                                <FormLabel>Username</FormLabel>
                                <Input type="text" size='md' value={user.username} disabled name="username" onChange={(e) => setUserData({ username: e.target.value })} />
                            </FormControl>
                            <FormControl id="lastName" margin={'1rem 0'}>
                                <FormLabel>E-mail Address</FormLabel>
                                <Input type="text" size='md' value={user.email} disabled name="email" onChange={(e) => setUserData({ email: e.target.value })} />
                            </FormControl>
                            <div style={{ textAlign: "end", margin: "2rem 0" }}>
                                <Button colorScheme="blue" onClick={handleUpdateUser}>
                                    Update Settings
                                </Button>
                            </div>
                        </Box>
                    </Flex>
                </Box>
                <Divider />
                <Box>
                    <Flex>
                        <Box p='4' flex='2'>
                            <Text fontSize='3xl' color={'gray.600'} margin={"2rem 0"} >
                                Change and update your password
                            </Text>
                            <Text fontSize='sm' color={'gray.600'}>
                            It's a good idea to use a strong password that you're not using elsewhere
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p='4' flex='2'>
                            <Box>
                                <FormControl id="oldPassword" margin={"0 0 1rem 0"}>
                                    <FormLabel>Old Password</FormLabel>
                                    <Input type="password" size='md' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                </FormControl>
                                <FormControl id="newPassword" margin={"1rem 0"}>
                                    <FormLabel>New Password</FormLabel>
                                    <Input type="password" size='md' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                </FormControl>
                                <FormControl id="retypeNewPassword" margin={"1rem 0"}>
                                    <FormLabel>Retype New Password</FormLabel>
                                    <Input type="password" size='md' value={retypeNewPassword} onChange={(e) => setRetypeNewPassword(e.target.value)} />
                                </FormControl>
                                <div style={{ textAlign: "end", marginTop: "2rem" }}>
                                    <Button colorScheme="blue" onClick={handlePasswordChange}>
                                        Update Password
                                    </Button>
                                </div>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Divider />
            </div>
        </div>
    )

}

export default Settings