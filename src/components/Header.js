import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const HeaderBox = styled(Box)(({}) => ({
    backgroundColor: '#007d00',
    color: 'white',
    padding: '1rem'
}))

const Header = () => {
    return (
        <HeaderBox>
            <Typography variant="h4" textAlign={'center'} fontWeight={'200'}>Egresso</Typography>
        </HeaderBox>
    )
}

export default Header