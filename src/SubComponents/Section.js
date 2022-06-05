import React from 'react'
import { Box } from '@chakra-ui/react'

const Section = ({children}) => {
  return (
    <Box sx={{width: '100vw', height: '100vh', backgroundColor: 'burlywood' , display: 'flex', justifyContent: 'center', 
    alignItems: 'center'}}>
        {children}
    </Box>
  )
}

export default Section;