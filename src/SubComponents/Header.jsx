import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Header = ({title}) => {
  return (
    <Box margin="0 2">
            <Text size="" fontSize="3xl" color="black" fontWeight="bold">
                {title}
            </Text>

    </Box>
  )
}

export default Header;