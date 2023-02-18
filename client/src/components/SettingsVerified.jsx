import { React, useState } from 'react'
import Alerts from '../shared/Alert'
import Indicator from '../components/Indicator'
import SubscriptionReport from './SubscriptionReport'
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

const SettingsVerified = ({ user }) => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handlePasswordChange = async () => {
    try {
      if (oldPassword === '' || newPassword === '' || retypeNewPassword === '') {
        toast.error("make sure to fill out the required fields");
      } else {
        const data = { oldPassword, newPassword, retypeNewPassword }
        const res = await axios.put("/api/v1/update/password", data);
        toast.success("password was successfuly updated")
        console.log(res)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const styles = {
    margin: "0 0 3rem 0"
  }

  const centerStyles = {
    textAlign: "center"
  }

  return (
    <div>

      <div style={styles}>
        <div style={centerStyles}>
          <Heading margin={"2rem 0 0 0"}>Account Data</Heading>
          <Text fontSize={'lg'} color={'gray.600'} margin={" 0 0 2rem 0"}>
            see and customize all your personal details
          </Text>
        </div>
        <Alerts className='px-5' message={"Use the application key to send messages with our API, you currently have an active plan"} />
      </div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>Account Key ~ {user.plan.key}</code>
          {/* <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Copy Key' : 'Copied'}
            </Button> */}
        </pre>
      </div>
      <Heading margin={"2rem 0 0 0"}>Personal Information</Heading>
      <HStack>
        <Box>
          <FormControl id="firstName">
            <FormLabel>Username</FormLabel>
            <Input type="text" size='md' disabled value={user.username} />
          </FormControl>
        </Box>
        <Box p={"2rem 7rem"}>
          <FormControl id="lastName">
            <FormLabel>E-mail Address</FormLabel>
            <Input type="text" size='md' disabled value={user.email} />
          </FormControl>
        </Box>
      </HStack>
      <Divider />
      <Box margin={"2rem 0"}>
        <Flex>
          <Box p='4' flex='2'>
            <Text fontSize='3xl' color={'gray.600'} margin={"0 0 2rem 0"} >
              Subscription Status
            </Text>
            <Text fontSize='sm' color={'gray.600'}>
              Subscribe to receive status update via email for Twilio services. We'll email you the details when the service is experiencing any problems on our end.
            </Text>
          </Box>
          <Spacer />
          <Box p='4' flex='2'>
             <SubscriptionReport plan={user.plan}/>
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Flex>
        <Box p='4' flex='2'>
          <Text fontSize='3xl' color={'gray.600'} margin={"2rem 0"} >
            Change and update your password
          </Text>
        </Box>
        <Spacer />
        <Box p='4' flex='2'>
          <Box>
            <FormControl id="firstName" margin={"0 0 1rem 0"}>
              <FormLabel>Old Password</FormLabel>
              <Input type="text" size='md' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </FormControl>
            <FormControl id="firstName" margin={"1rem 0"}>
              <FormLabel>New Password</FormLabel>
              <Input type="text" size='md' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </FormControl>
            <FormControl id="firstName" margin={"1rem 0"}>
              <FormLabel>Retype New Password</FormLabel>
              <Input type="text" size='md' value={retypeNewPassword} onChange={(e) => setRetypeNewPassword(e.target.value)} />
            </FormControl>
            <div style={{ textAlign: "end", marginTop: "2rem" }}>
              <Button variant="solid" bg="#0D74FF" color="white" hover={{}} onClick={handlePasswordChange}>
                Update Password
              </Button>
            </div>
          </Box>
        </Box>
      </Flex>
      <Divider />
    </div>
  )
}

export default SettingsVerified