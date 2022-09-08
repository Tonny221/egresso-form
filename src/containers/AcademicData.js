import { FormGroup, TextField, Typography, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'
import { DataForm, DataContainer } from './PersonalData'
import { useState } from 'react';

const AcademicData = () => {
    const [select, setSelect] = useState('')
    const [course, setCourse] = useState(false)

    const handleChange = (event) => {
        setSelect(event.target.value);
    }

    const handleCourse = () => {
        setCourse(!course);
        console.log("AAAAAAAAAA");
    }

    return (
        <>
            <DataContainer sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <Typography variant='h3' fontWeight={'200'} textAlign='center' pt={4}>Informações academicas</Typography>
                <DataForm>
                    <TextField variant='filled' label='Nome da Instituição que terminou sua graduação: ' />
                    <TextField variant='filled' label='Nome do campus: ' />
                    <TextField variant='filled' label='Qual cidade: ' />
                    <TextField select variant='filled' label='Estado' defaultValue={'Seu estado'} value={select} onChange={handleChange}>
                        <MenuItem value={1}>Estado 1</MenuItem>
                        <MenuItem value={2}>Estado 2</MenuItem>
                        <MenuItem value={3}>Estado 3</MenuItem>
                    </TextField>
                    <TextField select variant='filled' label='Curso' defaultValue={'Qual seu curso'} value={select} onChange={handleChange}>
                        <MenuItem value={1}>Curso 1</MenuItem>
                        <MenuItem value={2}>Curso 2</MenuItem>
                        <MenuItem value={3}>Curso 3</MenuItem>
                    </TextField>
                    <FormGroup>
                        <Typography>Instituição:</Typography>
                        <RadioGroup row>
                            <FormControlLabel value={'Pública'} control={<Radio />} label='Pública' />
                            <FormControlLabel value={'Particular'} control={<Radio />} label='Particular' />
                        </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                        <Typography>Modalidade de ensino:</Typography>
                        <RadioGroup row>
                            <FormControlLabel value={'Presencial'} control={<Radio />} label='Presencial' />
                            <FormControlLabel value={'Distância'} control={<Radio />} label='Distância' />
                        </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                        <Typography>Além do Curso realizado na Instituição de ensino que se formou, você possui outro(s) Curso(s) de Graduação?</Typography>
                        <RadioGroup row>
                            <FormControlLabel value={'Sim'} control={<Radio />} label='Sim' onChange={handleCourse}/>
                            <FormControlLabel value={'Não'} control={<Radio />} label='Não' onChange={handleCourse} />
                        </RadioGroup>
                    </FormGroup>
                    { course ? <TextField variant='filled' label='Qual (is) são os cursos de graduação'/> : <></>}
                    <TextField variant='filled' label='Quais os cursos extracurriculares realizado durante a sua graduação?' />
                </DataForm>
            </DataContainer>
        </>
    );
}

export default AcademicData