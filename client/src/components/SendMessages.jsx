import { Stack, HStack, VStack, Box, Heading, Text, Center, Container } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Textarea
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Nav from '../shared/Nav';

function Feature({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

export default function SendMessages() {

    return (
        <>
            <Nav />
            <Heading as='h3' size='lg' textAlign={'center'}>
                Send text messages with our provider
            </Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
            </List>
            <Center>
                <HStack spacing={8} mt={"2rem"}>
                    <Box p={5} shadow='md' borderWidth='1px'>
                        <Heading fontSize='xl'>Create Your Message</Heading>
                        <Text mt={4}>here we show inputs that help create the message</Text>
                        <Box mt={4}>
                            <FormControl id="sms-subject" isRequired mt={3}>
                                <FormLabel>SMS Subject</FormLabel>
                                <Input type="sms-subject" />
                            </FormControl>
                            <FormControl id="sms-message" isRequired mt={3}>
                                <FormLabel>SMS Body</FormLabel>
                                <FormControl id="sms-message">
                                    <Textarea
                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: 'gray.300',
                                        }}
                                        placeholder="message"
                                    />
                                </FormControl>
                            </FormControl>
                            <div style={{textAlign: "end", marginTop: "2rem"}}>
                                <Button colorScheme='blue' >Send Message</Button>
                            </div>
                        </Box>
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px' >
                        <Heading fontSize='xl'>Message Showcase</Heading>
                        <Text mt={4}>here we show the whole message body thats been send to the number</Text>
                    </Box>
                </HStack>
            </Center>
        </>
    )
}
