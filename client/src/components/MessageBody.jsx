import React from 'react'
import { Card, CardHeader, CardBody,Text,Box,Heading, Stack, StackDivider } from '@chakra-ui/react';

const MessageBody = ({subject,message}) => {
  return (
    <Card>
  <CardHeader>
    <Heading size='md'>Message Body</Heading>
  </CardHeader>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs'>
          {subject === '' ? 'Enter You Subject' : subject}
        </Heading>
        <Text pt='2' fontSize='sm'>
        {message === '' ? 'Enter You Message' : message}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

export default MessageBody