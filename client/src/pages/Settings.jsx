import { React, useState } from 'react'
import useAuth from '../hooks/useAuth'
import Nav from '../shared/Nav'
import Alerts from '../shared/Alert'
import { Code } from '@chakra-ui/react'
import PhoneNumberInput from '../components/PhoneNumberInput'
import { COUNTRIES } from '../hooks/Countries'

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

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [retypeNewPassword, setRetypeNewPassword] = useState("");
    const [phone, setPhone] = useState("")

    const countryOptions = COUNTRIES.map(({ name, iso }) => ({
        label: name,
        value: iso
    }));

    const { user, loading } = useAuth()

    const updateTwoFactorMethods = async () => {
        console.log('success')
    }

    const handleUpdateUser = async (e) => {

        try {
            const data = { username, email }
            const res = await axios.patch(`/api/v1/update/user/data?id=${user._id}`, data);
            toast.success(res?.data?.message);
            console.log(res?.data)
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error.response.data)
        }
    }

    const handlePasswordChange = async () => {
        try {
            if (oldPassword === '' || newPassword === '' || retypeNewPassword === '') {
                toast.error("make sure to fill out the required fields");
            } else {
                const data = { oldPassword, newPassword, retypeNewPassword }
                const res = await axios.put(`/api/v1/update/password?id=${user._id}`, data);
                toast.success(res?.data?.message)
                setOldPassword('')
                setNewPassword('')
                setRetypeNewPassword('')
            }
        } catch (error) {
            toast.error(error.response.data.message);
            setOldPassword('')
            setNewPassword('')
            setRetypeNewPassword('')
        }
    }


    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Nav />
            <div style={{ padding: "3rem 10rem" }}>
                <div style={{textAlign: "center"}}>
                    <Heading margin={"2rem 0 0 0"}>Account Data</Heading>
                    <Text fontSize={'lg'} color={'gray.600'} margin={" 0 0 2rem 0"}>
                        see and customize all your personal details
                    </Text>
                </div>
                <Box>
                    <Flex>
                        <Box p='4' flex='2'>
                            <Text fontSize='3xl' color={'gray.600'} margin={"2rem 0"} >
                                Your account info on our service
                            </Text>
                            <Text fontSize='sm' color={'gray.600'}>
                                Here you can see your personal info and options to change, update and manage it based on your prefrencess and needs.
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p='4' flex='2'>
                            <FormControl id="firstName" margin={'1rem 0'}>
                                <FormLabel>Username</FormLabel>
                                <Input type="text" size='md' placeholder={user.username} name="username" onChange={(e) => setUsername(e.target.value)} />
                            </FormControl>
                            <FormControl id="lastName" margin={'1rem 0'}>
                                <FormLabel>E-mail Address</FormLabel>
                                <Input type="text" size='md' placeholder={user.email} name="email" onChange={(e) => setEmail(e.target.value)} />
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
                                Two-Factor Authentication (2FA) Methods
                            </Text>
                            <Text fontSize='sm' color={'gray.600'}>
                                You can select your preferred method to receive the two- factor authentication code.<br />
                                Add a secondary email address or phone number in case you lose touch to your main credentials, so you will be able to continue to use your account.
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p='4' flex='2'>
                            <FormControl id="lastName" margin={'1rem 0'}>
                                <FormLabel>Email Address</FormLabel>
                                <Input type="text" size='md' name="email" />
                            </FormControl>
                            <FormControl mt={3}>
                                <FormLabel>Phone Number</FormLabel>
                                <PhoneNumberInput
                                    value={phone}
                                    options={countryOptions}
                                    onChange={value => setPhone(value)}
                                />
                            </FormControl>
                            <div style={{ textAlign: "end", marginTop: "2rem" }}>
                                <Button colorScheme="blue" onClick={updateTwoFactorMethods}>
                                    Add 2FA Method
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
                {user.planActive ? <SettingsVerified user={user} /> : <SettingsNotVerified />}
            </div>
        </div>
    )

}

export default Settings