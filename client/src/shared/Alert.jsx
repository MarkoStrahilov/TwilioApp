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

 export default function Alerts({message}) {
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
            {message}
          </AlertDescription>
        </Box>
      </Alert>
    ) : (
      <Button onClick={onOpen}>Show Alert</Button>
    )
  }