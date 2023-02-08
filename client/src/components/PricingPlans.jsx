import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../pages/Navbar'

import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function PriceWrapper({ children }) { 
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

const plans = [
  {id: 0, name: "Hobby", priceInUSD: 2.50, credits: 50, offer: false},
  {id: 1, name: "Growth", priceInUSD: 5, credits: 100,offer: true},
  {id: 2, name: "Scale", priceInUSD: 7.50, credits: 150, offer: false}
]

export default function ThreeTierPricing() {

  const handlePlanChange = async(id) => {

    try {
      const selectedPlan = plans[id]
      const res = await axios.post(`/api/v1/select/pricing/tier?name=${selectedPlan.name}`,selectedPlan)
      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }

  return (
    <>
    <Navbar />
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        {plans.map((plan) => (
              <PriceWrapper key={plan.id}>
                  <Box position="relative">
                {plan.offer === true && (
                  <Box
                    position="absolute"
                      top="-16px"
                      left="50%"
                      style={{ transform: 'translate(-50%)' }}>
                      <Text
                        textTransform="uppercase"
                        bg="red.300" 
                        _dark={{bg: "red.700"}}
                        px={3}
                        py={1}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Most Popular                  
                        </Text>
                    </Box>
                )}
                    <Box py={4} px={12}>
                      <Text fontWeight="500" fontSize="2xl">
                        {plan.name}
                      </Text>
                      <HStack justifyContent="center">
                        <Text fontSize="3xl" fontWeight="600">
                          $
                        </Text>
                        <Text fontSize="5xl" fontWeight="900">
                          {plan.priceInUSD}
                        </Text>
                        <Text fontSize="3xl" color="gray.500">
                          / {plan.credits} credits
                        </Text>
                      </HStack>
                    </Box>
                    <VStack
                      bg='gray.50' 
                      _dark='gray.700'
                      py={4}
                      borderBottomRadius={'xl'}>
                      <List spacing={3} textAlign="start" px={12}>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          unlimited build minutes
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          Lorem, ipsum dolor.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          5TB Lorem, ipsum dolor.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          5TB Lorem, ipsum dolor.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          5TB Lorem, ipsum dolor.
                        </ListItem>
                      </List>
                      <Box w="80%" pt={7}>
                        <Button w="full" colorScheme="red" onClick={() => handlePlanChange(plan.id)}>
                          Start trial
                        </Button>
                      </Box>
                    </VStack>
                  </Box>
                </PriceWrapper>
        ))}
      </Stack>
    </Box>
    </>
  );
}