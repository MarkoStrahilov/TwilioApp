import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import useNavarHook from '../hooks/useNavarHook'
import Loader from '../shared/Loader';
import Nav from '../shared/Nav';
import Navbar from '../pages/Navbar'
import ApiRequestExampleTable from '../CodeRequestExamples/ApiRequestExampleTable';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ApiDocumentation = () => {

    const { user, loader } = useNavarHook()
    const request = 'https://smscroc.com/send/message?key={YOUR API KEY}'

    const messageString = `
    {
        "status": "success",
        "message": "message was successfuly send",
        "data": {
            "fromUser": "n23uigjewm98q0p2owlf9,
            "creditsRemaining": 43,
            "message": "Hello World",
            "toPhoneNumber": "+5555555555"
        }
    }
    `

    if (loader) return <Loader />

    return (
        <>
            {user ? <Nav /> : <Navbar />}
            <div style={{ padding: "3rem 10rem" }}>
                <Heading margin={"2rem 0"}>Getting started</Heading>
                <Text fontSize={'lg'} color={'gray.600'} margin={" 0 0 2rem 0"}>
                    Dive into our full API Reference Documentation and seamlessly integrate SMS, Chat, Voice functionalities into your website or application with the SMS Croc APIs.<br /> SMS Croc's APIs use HTTP verbs and a RESTful endpoint structure. An access key is used as the API Authorization framework. Request and response payloads are formatted as JSON (although we provide a GET alternative for requests), using UTF-8 encoding and URL encoded values.
                </Text>
                <Box p='4' flex='2'>
                    <Text fontSize='xl' color={'gray.600'}>
                        Send messages using <b>HTTP POST</b>
                    </Text>
                    <Text fontSize='sm' color={'gray.600'} margin={"1rem 0 2rem 0"}>
                        The endpoint accepts a POST request with the following code
                    </Text>
                    <div className="mockup-code">
                        <pre data-prefix="$" className="text-success"><code>{request}</code></pre>
                    </div>
                    <Text fontSize='xl' color={'gray.600'} marginTop={"2rem"}>
                        Fill out the <b>request body</b>
                    </Text>
                    <Text fontSize='sm' color={'gray.600'} margin={"1rem 0 2rem 0"}>
                        After entering your API key, you have to fill out the request body in order to successfuly send the message, if you don't have an key or simply ran out of credits, you can purchase you key <Link to={"/pricing-plans"} style={{ color: "blue", textDecoration: "underline" }}>here</ Link>
                    </Text>
                    <UnorderedList>
                        <ListItem><b>message: </b>here you should add the content of the message that you want to send</ListItem>
                        <ListItem><b>phone: </b>here you should add the number that you want this message to be send to</ListItem>
                    </UnorderedList>
                </Box>
                <Box p='4' flex='2'>
                    <Text fontSize='xl' color={'gray.600'} marginTop={"2rem"}>
                        Here are some examples of <b>requests</b> in different languages
                    </Text>
                    <Text fontSize='sm' color={'gray.600'} margin={"1rem 0 2rem 0"}>
                        Every programming language has a way to send an HTTP POST request. Instead of installing a special library or package, just send a POST request using your preferred method. Below are some examples in common languages.
                    </Text>
                    <ApiRequestExampleTable request={request} />
                </Box>
                <Box p='4' flex='2'>
                    <Text fontSize='xl' color={'gray.600'}>
                        API <b>Response</b>
                    </Text>
                    <Text fontSize='sm' color={'gray.600'} margin={"1rem 0 2rem 0"}>
                        The API will respond with JSON:
                    </Text>
                    <UnorderedList>
                        <ListItem><b>status: </b>Whether the message was send successfully or not ("success" / "fail").</ListItem>
                        <ListItem><b>fromUser: </b>Account ID used to send the message.</ListItem>
                        <ListItem><b>creditsRemaining: </b>The amount of credit remaining on your key.</ListItem>
                        <ListItem><b>message: </b>The content of the message that was send</ListItem>
                        <ListItem><b>toPhoneNumber: </b>The number where the content of the message was send</ListItem>
                    </UnorderedList>
                    <Text fontSize='xl' color={'gray.600'} marginTop={"2rem"}>
                        Here is an example of the response, when the message was send <b>successfuly</b>
                    </Text>
                    <SyntaxHighlighter language="node" style={docco}>
                            {messageString}
                        </SyntaxHighlighter>
                </Box>
            </div>
        </>
    )
}

export default ApiDocumentation