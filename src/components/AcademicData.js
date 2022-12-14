import { FormGroup, TextField, Typography, MenuItem, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const AcademicData = () => {
    const [select, setSelect] = useState('')
    const [course, setCourse] = useState(false)

    const handleChange = (event) => {
        setSelect(event.target.value);
    }

    const handleCourse = () => {
        setCourse(!course);
        console.log(course);
    }

    const turnCourseFalse = () => {
        if (course === true) { setCourse(!course) }
    }

    return (
        <Stack rowGap={4}>
            <Typography variant='h3'>Informações academicas</Typography>
            <TextField variant='filled' label='Nome da Instituição que terminou sua graduação' />
            <TextField variant='filled' label='Nome do campus' />
            <TextField variant='filled' label='Qual cidade' />
            <TextField select variant='filled' label='Estado' defaultValue={'Seu estado'} value={select} onChange={handleChange}>
                <MenuItem value={1}>Estado 1</MenuItem>
                <MenuItem value={2}>Estado 2</MenuItem>
                <MenuItem value={3}>Estado 3</MenuItem>
            </TextField>
            <TextField variant='filled' label='Curso' />
            <FormGroup>
                <Typography variant='h6'>Instituição:</Typography>
                <RadioGroup>
                    <FormControlLabel value={'Pública'} control={<Radio />} label='Pública' />
                    <FormControlLabel value={'Particular'} control={<Radio />} label='Particular' />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Modalidade de ensino:</Typography>
                <RadioGroup>
                    <FormControlLabel value={'Presencial'} control={<Radio />} label='Presencial' />
                    <FormControlLabel value={'Distância'} control={<Radio />} label='Distância' />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Além do Curso realizado na Instituição de ensino que se formou, você possui outro(s) Curso(s) de Graduação?</Typography>
                <RadioGroup>
                    <FormControlLabel value={'Sim'} control={<Radio />} label='Sim' onChange={handleCourse} />
                    <FormControlLabel value={'Não'} control={<Radio />} label='Não' onChange={turnCourseFalse} />
                </RadioGroup>
            </FormGroup>
            {course ? <TextField variant='filled' label='Qual (is) são os cursos de graduação' /> : <></>}
            <TextField variant='filled' label='Coeficiente de rendimento (opcional)' />
        </Stack>
    );
}

export default AcademicData