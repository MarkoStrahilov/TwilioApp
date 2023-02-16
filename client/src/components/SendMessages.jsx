import { HStack, Heading, Text, Center, Box } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../shared/Nav";
import MessageBody from "./MessageBody";
import EmptyMessage from "./EmptyMessage";
import TableMessages from "./TableMessages";

export default function SendMessages() {

  const [user,setUser] = useState({})
  const [loader, setLoader] = useState(false);
  
  const navigate = useNavigate();

  const [messages,setMessages] = useState([])
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone,setPhone] = useState("")

  useEffect(() => {
      setLoader(true);
      axios
        .get("/api/v1/current/user")
        .then((res) => {
          setLoader(false);
          setUser(res?.data?.data?.user);
          setMessages(res?.data?.data?.user?.messages)
        })
        .catch((error) => {
          navigate("/sign-in");
          setLoader(false);
        });
    }, []);

  const formSubmit = async () => {
    try {
      if (subject === "" || message === "") {

        toast.error("make sure to fill out the required fields");
        
      } else {
         setMessages([message, ...messages]);

        const data = { subject, phone, message };
       await axios.post(`/api/v1/send/message?id=${user._id}`, data);

        setSubject("");
        setMessage("");
        toast.success("message was successfuly send");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if(!user) {
    toast.error("something went wrong please try again");
    return navigate("/")
  }

  return (
    <>
      {loader ? (
       null
      ) : (
        <>
          <Nav />
          <Heading as="h3" size="lg" textAlign={"center"}>
         Howdy {user.username} Send text messages with our provider
          </Heading>
          <Center>
            <HStack spacing={8} mt={"2rem"}>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Create Your Message</Heading>
                <Text mt={4}>
                  Here we show inputs that help create your custom message
                </Text>
                <Box mt={4}>
                  <FormControl id="sms-subject" isRequired mt={3}>
                    <FormLabel>SMS Subject</FormLabel>
                    <Input
                      type="sms-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="sms-phone" isRequired mt={3}>
                    <FormLabel>Enter Number</FormLabel>
                    <Input
                      type="sms-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="sms-message" isRequired mt={3}>
                    <FormLabel>SMS Body</FormLabel>
                    <FormControl id="sms-message">
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormControl>
                  </FormControl>
                  <div style={{ textAlign: "end", marginTop: "2rem" }}>
                    <Button colorScheme="blue" onClick={formSubmit}>
                      Send Message
                    </Button>
                  </div>
                </Box>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                {subject === "" && message === "" ? (
                  <EmptyMessage />
                ) : (
                  <MessageBody subject={subject} message={message} />
                )}
              </Box>
            </HStack>
          </Center>
          {messages.length !== 0 ? <TableMessages messages={messages} /> : null}
        </>
      )}
    </>
  );
}
