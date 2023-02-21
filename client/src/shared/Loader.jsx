import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {

    const styles = {
        width: "80%",
        margin: "auto",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={styles}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    )
}

export default Loader