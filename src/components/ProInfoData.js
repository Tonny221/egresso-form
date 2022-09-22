import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography, Checkbox, Stack } from '@mui/material'
import React from 'react'
import { DataForm, DataContainer } from './PersonalData'
import { useState } from 'react'

const ProInfoData = () => {
    const [reasons, setReasons] = useState(false)
    const [othersCheckbox, setOthersCheckbox] = useState(false)
    const [othersAreaWorked, setOthersAreaWorked] = useState(false)
    const [knowledge, setKnowledge] = useState(false)

    const handleReasons = () => {
        setReasons(!reasons)
    }

    const turnReasonsOff = () => {
        if (reasons === true) { setReasons(!reasons) }
    }

    const handleOthersAreaWorked = () => {
        setOthersAreaWorked(!othersAreaWorked)
    }

    const turnOthersAreaWorkedOff = () => {
        if (othersAreaWorked === true) { setOthersAreaWorked(!othersAreaWorked) }
    }

    const handleOthersCheckbox = () => {
        setOthersCheckbox(!othersCheckbox)
    }

    const handleKnowledge = () => {
        setKnowledge(!knowledge)
    }

    const turnKnowlegdeOff = () => {
        if (knowledge === true) { setKnowledge(!knowledge) }
    }

    return (
        <Stack rowGap={4}>
            <Typography variant='h3'>Informações Profissionais</Typography>
            <FormGroup>
                <Typography variant='h6'>Está atualmente empregado?</Typography>
                <RadioGroup>
                    <FormControlLabel control={<Radio />} label='Sim' value={'Sim'} onChange={turnReasonsOff} />
                    <FormControlLabel control={<Radio />} label='Não' value={'Não'} onChange={handleReasons} />
                    {reasons ? <TextField variant='filled' label='Relate os motivos' /> : <></>}
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Qual o ramo de atividade que já trabalhou?</Typography>
                <FormControlLabel control={<Checkbox />} label='Educação' value={'1'} />
                <FormControlLabel control={<Checkbox />} label='Industrial' value={'Industrial'} />
                <FormControlLabel control={<Checkbox />} label='Comércio' value={'Comércio'} />
                <FormControlLabel control={<Checkbox />} label='Agronegócio' value={'Agronegócio'} />
                <FormControlLabel control={<Checkbox />} label='Serviços' value={'Serviços'} />
                <FormControlLabel control={<Checkbox />} label='Microempreendedor' value={'microempreendedor'} />
                <FormControlLabel control={<Checkbox />} label='Setor público' value={'Setor público'} />
                <FormControlLabel control={<Checkbox />} label='Outros (descrever)' value={'Outros'} onChange={handleOthersCheckbox} />
                {othersCheckbox ? <TextField variant='filled' label='Descreva' /> : <></>}
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Qual área você já trabalhou?</Typography>
                <RadioGroup>
                    <FormControlLabel control={<Radio />} label='Financeiro' value={'Financeiro'} onChange={turnOthersAreaWorkedOff} />
                    <FormControlLabel control={<Radio />} label='Contabilidade' value={'Contabilidade'} onChange={turnOthersAreaWorkedOff} />
                    <FormControlLabel control={<Radio />} label='Administrativo' value={'Administrativo'} onChange={turnOthersAreaWorkedOff} />
                    <FormControlLabel control={<Radio />} label='Outros' value={'Outros'} onChange={handleOthersAreaWorked} />
                    {othersAreaWorked ? <TextField variant='filled' label='Relate as principais atividades desenvolvidas nas empresas que trabalhou' /> : <></>}
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Tem disponibilidade/interesse para trabalhar em qual modalidade:</Typography>
                <RadioGroup>
                    <FormControlLabel control={<Radio />} label='Home office' value={'home office'} />
                    <FormControlLabel control={<Radio />} label='Híbrido' value={'híbrido'} />
                    <FormControlLabel control={<Radio />} label='Presencial' value={'Presencial'} />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Tem conhecimento de informática?</Typography>
                <RadioGroup>
                    <FormControlLabel control={<Radio />} label='Sim' value={'Sim'} onChange={handleKnowledge} />
                    <FormControlLabel control={<Radio />} label='Não' value={'Não'} onChange={turnKnowlegdeOff} />
                    {knowledge ? <TextField variant='filled' label='Qual(is) sistemas?' /> : <></>}
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Descreva suas principais qualidades pessoais</Typography>
                <FormControlLabel control={<Checkbox />} label='Iniciativa' value={'Iniciativa'} />
                <FormControlLabel control={<Checkbox />} label='Criatividade' value={'Criatividade'} />
                <FormControlLabel control={<Checkbox />} label='Interesse em novas tecnologias' value={'Interesse em novas tecnologias'} />
                <FormControlLabel control={<Checkbox />} label='Adaptabilidade' value={'Adaptabilidade'} />
                <FormControlLabel control={<Checkbox />} label='Interesse em se desenvolver' value={'Interesse em se desenvolver'} />
                <FormControlLabel control={<Checkbox />} label='Planejamento' value={'Planejamento'} />
                <FormControlLabel control={<Checkbox />} label='Comunicação' value={'comunicação'} />
                <FormControlLabel control={<Checkbox />} label='Facilidade para trabalhar em equipe' value={'Facilidade para trabalhar em equipe'} />
            </FormGroup>
        </Stack>
    )
}

export default ProInfoData