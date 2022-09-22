import { FormControlLabel, FormGroup, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

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