import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  const TableMessages = ({messages}) => {

    return (
        <TableContainer>
        <Table variant='striped' colorScheme='gray' marginTop={"5rem"}>
          <TableCaption>See the recent 5 messages that you send</TableCaption>
          <Thead>
            <Tr>
              <Th>Message Id</Th>
              <Th>Status</Th>
              <Th>Message</Th>
              <Th>Send to</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
             {messages.map(message => (
              <Tr key={message._id}>
              <Td>{message._id}</Td>
              <Td color={'green.600'}>{message.status}</Td>
              {message?.text.length < 30 ? <Td>{message?.text}</Td> : <Td>{message?.text.substring(0,30)} ...</Td>}
              <Td>{message?.toPhoneNumber}</Td>
              <Td>{message?.createdAt}</Td>
            </Tr>
            ))} 
          </Tbody>
        </Table>
      </TableContainer>
    )
  }
  
  export default TableMessages