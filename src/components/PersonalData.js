import { Container, FormControl, FormControlLabel, FormGroup, MenuItem, Radio, RadioGroup, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const DataContainer = styled(Container)(({ theme }) => ({
    boxShadow: '0px 4px 8px rgba(0,0,0,0.9)',
    width: '95%'
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: '200'
}))

export const DataForm = styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '8rem',
        padding: '2rem',
        rowGap: '1.5rem'
    },
    [theme.breakpoints.only('xs')]: {
        display: 'flex',
        padding: '1rem',
        rowGap: '2rem'
    }
}))

const PersonalData = () => {
    const [select, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    }

    return (
        <Stack rowGap={4}>
            <Typography variant='h3'>Dados pessoais</Typography>
            <TextField variant='filled' label='Nome' />
            <TextField variant='filled' label='Idade' />
            <TextField variant='filled' label='Estado Civil' />
            <TextField variant='filled' label='Cidade' />
            <TextField select variant='filled' label='Estado' defaultValue={'Seu estado'} value={select} onChange={handleChange}>
                <MenuItem value={1}>Estado 1</MenuItem>
                <MenuItem value={2}>Estado 2</MenuItem>
                <MenuItem value={3}>Estado 3</MenuItem>
            </TextField>
            <TextField variant='filled' label='Telefone' />
            <TextField variant='filled' label='Email' />
            <FormGroup>
                <Typography variant='h6'>Podemos disponibilizar os dados do cadastro para contratação de empresas parceiras?</Typography>
                <RadioGroup>
                    <FormControlLabel value='sim' control={<Radio />} label='Sim' />
                    <FormControlLabel value='nao' control={<Radio />} label='Não' />
                </RadioGroup>
            </FormGroup>
        </Stack>
    )
}

export default PersonalData