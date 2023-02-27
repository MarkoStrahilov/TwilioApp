import React from 'react'
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

const ApiDocumentation = () => {
    return (
        <div style={{ padding: "3rem 10rem" }}>
            <Heading margin={"2rem 0"}>SMS Croc API Reference</Heading>
            <Text fontSize={'lg'} color={'gray.600'} margin={" 0 0 2rem 0"}>
                Dive into our full API Reference Documentation and seamlessly integrate SMS, Chat, Voice functionalities into your website or application with the SMS Croc APIs.<br /> SMS Croc's APIs use HTTP verbs and a RESTful endpoint structure. An access key is used as the API Authorization framework. Request and response payloads are formatted as JSON (although we provide a GET alternative for requests), using UTF-8 encoding and URL encoded values.
            </Text>
            <Divider />
            <Box p='4' flex='2'>
                <Text fontSize='xl' color={'gray.600'} margin={"2rem 0"} >
                    API Endpoint
                </Text>
                <Text fontSize='sm' color={'gray.600'}>
                    https://smscroc.com/
                </Text>
            </Box>
        </div>
    )
}

export default ApiDocumentation