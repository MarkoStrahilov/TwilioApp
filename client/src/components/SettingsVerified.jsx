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

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

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
        <Alerts className='px-5' message={"Use the application key to send messages with our API, you currently have an active plan. In order to see how to use your API key please visit the official documentation"} />
      </div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>Account Key ~ {user.plan.key}</code>
          {/* <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Copy Key' : 'Copied'}
            </Button> */}
        </pre>
      </div>
      <Divider />
      <Box margin={"2rem 0"}>
        <Flex>
          <Box p='4' flex='2'>
            <Text fontSize='3xl' color={'gray.600'} margin={"0 0 2rem 0"} >
              Subscription Status
            </Text>
            <Text fontSize='sm' color={'gray.600'}>
              Subscribe to receive status update via email for Twilio services. We'll email you the details when the service is experiencing any problems on our end
            </Text>
          </Box>
          <Spacer />
          <Box p='4' flex='2'>
             <SubscriptionReport plan={user.plan} credits={user.credits}/>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default SettingsVerified