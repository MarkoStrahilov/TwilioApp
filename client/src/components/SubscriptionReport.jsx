import React from 'react'
import Indicator from '../components/Indicator'
import {
    Box,
    Stack,
    CardBody,
    Card,
    CardHeader,
    StackDivider,
    Heading,
    Text,
    Spacer,
    Divider,
    Flex
  } from '@chakra-ui/react';

const SubscriptionReport = ({plan}) => {
    return (
        <Box>
            <Box>
                <Heading size='md'>Subscription Summary Report</Heading>
            </Box>
            <Box>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Flex>
                            <Text margin={'.6rem 0'}>Active</Text>
                                <Indicator />
                            </Flex>
                    </Box>
                    <Box>
                        <Heading size='xs'>Plan Overview</Heading>
                        <Text pt='2' fontSize='sm'>
                            Plan activated with  name <b>{plan.name}.</b><br />
                            Plan purchased for <b>$ {plan.priceInUSD}.</b><br />
                            Remaining <b>{plan.credits} credits</b> untill the end of the subscription.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs'>
                            Analysis
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            Subscription Activated on {plan.createdAt}
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default SubscriptionReport