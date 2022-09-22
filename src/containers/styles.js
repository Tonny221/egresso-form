import { Box, styled, Paper, Button } from '@mui/material'

export const PaperContainer = styled(Box)(({ theme }) => ({
    width: '60%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
    [theme.breakpoints.down('md')]: {
        width: '90%'
    },
    margin: '4rem auto'
}));

export const InfoPaper = styled(Paper)(({ theme }) => ({
    padding: '1rem',
    [theme.breakpoints.up('sm')]: {
        padding: '6rem'
    },
    [theme.breakpoints.down('md')]: {
        padding: '4rem'
    },
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4rem',
    [theme.breakpoints.down("sm")]: {
        boxShadow: 'none'
    }
}))

export const SubmitBtn = styled(Button)(({ theme }) => ({
    width: '8rem',
    margin: '0 auto'
}))