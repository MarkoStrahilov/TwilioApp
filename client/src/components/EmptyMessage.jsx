import React from 'react'
import { Card, CardBody, Heading, Text, Divider, Stack, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const EmptyMessage = () => {
    return (
        <div>
            <Card maxW='lg'>
                <CardBody>
                    <Center>
                        <FontAwesomeIcon icon={solid('commenting')} size="6x" bounce  fixedWidth/>
                    </Center>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' textAlign={'center'}>Message Body Empty</Heading>
                        <Text>
                            Currently you haven't started creating a message, on your right side you can see a form, where you can insert the information that you want to be send
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
            </Card>
        </div>
    )
}

export default EmptyMessage