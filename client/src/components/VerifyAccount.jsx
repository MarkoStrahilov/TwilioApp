import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Loader from '../shared/Loader'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress
} from '@chakra-ui/react'

const VerifyAccount = () => {

  const { userId, token } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState(undefined)
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`/api/v1/fetch/user?id=${userId}`)
      .then((res) => {
        setLoader(false);
        setUser(res?.data?.data?.user);
        console.log(res?.data)
      })
      .catch((error) => {
        setLoader(false);
      });

  }, []);

  console.log(user)

  const handleClick = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/v1/register/validation/user?id=${userId}&token=${token}&token_request_validation=true`)
      toast.success(res?.data?.message);
      navigate("/sign-in")
      console.log(res?.data)
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data)
    }
  }

  if (loader) {
    return <Loader />
  }
  return (
    <div>
      <Navbar />
      <Progress size='xs' isIndeterminate />
      <Alert
        status='info'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='413px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Account Verification
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          In order to use our service account verification is needed in order to proceed, please click the button in order to verify your account, keep in mind when you click the button you agree to our terms of service and privacy policies
        </AlertDescription>
        <Button colorScheme="blue" onClick={handleClick} margin={"2rem 0"}>Verify Account</Button>
      </Alert>
      <Footer />
    </div>
  )
}

export default VerifyAccount