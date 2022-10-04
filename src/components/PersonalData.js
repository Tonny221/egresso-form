import { FormControlLabel, FormGroup, Grid, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
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
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField fullWidth select variant='filled' label='Estado' defaultValue={'Seu estado'} value={select} onChange={handleChange}>
                        <MenuItem value={1}>Estado 1</MenuItem>
                        <MenuItem value={2}>Estado 2</MenuItem>
                        <MenuItem value={3}>Estado 3</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth variant='filled' label='Cidade' />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth variant='filled' label='Bairro' />
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth variant='filled' label='Rua' />
                </Grid>
                <Grid item xs={2}>
                    <TextField fullWidth variant='filled' label='Número' />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth variant='filled' label='Telefone' />
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth variant='filled' label='Email' />
                </Grid>
            </Grid>
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