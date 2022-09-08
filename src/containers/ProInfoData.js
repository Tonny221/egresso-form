import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography, Checkbox } from '@mui/material'
import React from 'react'
import { DataForm, DataContainer } from './PersonalData'
import { useState } from 'react'

const ProInfoData = () => {
    const [reasons, setReasons] = useState(false)
    const [othersCheckbox, setOthersCheckbox] = useState(false)

    const handleReasons = () => {
        setReasons(!reasons)
    }

    const turnReasonsOff = () => {
        if (reasons === true) { setReasons(!reasons) }
    }

    const handleOthersCheckbox = () => {
        setOthersCheckbox(!othersCheckbox)
    }

    return (
        <>
            <DataContainer sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <Typography variant='h3' fontWeight={'200'} textAlign='center' pt={'2rem'}>Informações Profissionais</Typography>
                <DataForm>
                    <FormGroup>
                        <Typography>Está atualmente empregado?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} label='Sim' value={'Sim'} onChange={turnReasonsOff} />
                            <FormControlLabel control={<Radio />} label='Não' value={'Não'} onChange={handleReasons} />
                            {reasons ? <TextField variant='filled' label='Relate os motivos' /> : <></>}
                        </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                        <Typography>Qual o ramo de atividade que já trabalhou?</Typography>
                        <FormControlLabel control={<Checkbox />} label='Educação' value={'1'} />
                        <FormControlLabel control={<Checkbox />} label='Industrial' value={'Industrial'} />
                        <FormControlLabel control={<Checkbox />} label='Comércio' value={'Comércio'} />
                        <FormControlLabel control={<Checkbox />} label='Agronegócio' value={'Agronegócio'} />
                        <FormControlLabel control={<Checkbox />} label='Serviços' value={'Serviços'} />
                        <FormControlLabel control={<Checkbox />} label='Microempreendedor' value={'microempreendedor'} />
                        <FormControlLabel control={<Checkbox />} label='Setor público' value={'Setor público'} />
                        <FormControlLabel control={<Checkbox />} label='Outros (descrever)' value={'Outros'} /> 
                    </FormGroup>
                </DataForm>
            </DataContainer>
        </>
    )
}

export default ProInfoData