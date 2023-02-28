import { React } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const VerifyAccount = () => {

  const { userId, token } = useParams()
  const navigate = useNavigate()

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

  return (
    <div>
      <h1>Verify Account Data</h1>
      <p>id: {userId}</p>
      <p>token: {token}</p>
      <Button colorScheme="blue" onClick={handleClick}>Verify Account</Button>
    </div>
  )
}

export default VerifyAccount