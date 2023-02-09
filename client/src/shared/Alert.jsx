import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

 export default function Alerts() {
    const {
      isOpen: isVisible,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
      <Alert status='info'>
        <AlertIcon />
        <Box>
          <AlertTitle>API KEY</AlertTitle>
          <AlertDescription>
            Your application has been received. We will review your application
            and respond within the next 48 hours.
          </AlertDescription>
        </Box>
      </Alert>
    ) : (
      <Button onClick={onOpen}>Show Alert</Button>
    )
  }