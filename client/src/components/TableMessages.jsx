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

  const TableMessages = () => {

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
            <Tr>
              <Td>1324128941249</Td>
              <Td>Success</Td>
              <Td>Great Love It</Td>
              <Td>25.01.2022</Td>
            </Tr>
            <Tr>
              <Td>1324128941249</Td>
              <Td>Failed</Td>
              <Td>What is that</Td>
              <Td>25.01.2022</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    )
  }
  
  export default TableMessages