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
          <TableCaption>See all of the recent messages that you send</TableCaption>
          <Thead>
            <Tr>
              <Th>Account Id</Th>
              <Th>Status</Th>
              <Th>Message</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {messages && messages.map(message => (
              <Tr>
              <Td>{message._id}</Td>
              <Td>Success</Td>
              <Td>{message?.text}</Td>
              <Td>{message?.createdAt}</Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )
  }
  
  export default TableMessages