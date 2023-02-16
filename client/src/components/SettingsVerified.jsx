import { React, useState } from 'react'
import Alerts from '../shared/Alert'
import NewPassword from '../components/NewPassword'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Spacer,
  Divider
} from '@chakra-ui/react';

const SettingsVerified = ({ user }) => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const styles = {
    margin: "0 0 3rem 0"
  }

  const centerStyles = {
    textAlign: "center"
  }

  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
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
      <Box margin={"0 0 2rem 0"}>
          <Heading margin={"2rem 0"}>Subscription</Heading>
        <Flex>
          <Box p='4' flex='2' border={"1px solid black"}>
            Box 1
          </Box>
          <Spacer />
          <Box p='4' flex='2' border={"1px solid black"}>
            Box 2
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Flex>
        <Box p='4' flex='2'>
          <Text fontSize='3xl' color={'gray.600'} margin={" 0 0 2rem 0"} >
            Change and update your password
          </Text>
        </Box>
        <Spacer />
        <Box p='4' flex='2'>
          <Box>
            <FormControl id="firstName" margin={"0 0 1rem 0"}>
              <FormLabel>Old Password</FormLabel>
              <Input type="text" size='md' value={user.username} />
            </FormControl>
            <FormControl id="firstName" margin={"1rem 0"}>
              <FormLabel>New Password</FormLabel>
              <Input type="text" size='md' value={user.username} />
            </FormControl>
            <FormControl id="firstName" margin={"1rem 0"}>
              <FormLabel>Retype New Password</FormLabel>
              <Input type="text" size='md' value={user.username} />
            </FormControl>
            <div style={{ textAlign: "end", marginTop: "2rem" }}>
              <Button variant="solid" bg="#0D74FF" color="white" hover={{}}>
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