import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography, Box, Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const CourseInfoData = () => {
    const [others, setOthers] = useState(false)
    const [jobOthers, setJobOthers] = useState(false)
    const [othersReasons, setOthersReasons] = useState(false)

    const handleOthers = () => {
        setOthers(!others);
    }

    const handleJobOthers = () => {
        setJobOthers(!jobOthers);
    }

    const turnJobOthersFalse = () => {
        if (jobOthers === true) { setJobOthers(!jobOthers) }
    }

    const handleOthersReasons = () => {
        setOthersReasons(!othersReasons)
    }

    const turnOthersReasonsFalse = () => {
        if (othersReasons === true) { setOthersReasons(!othersReasons) }
    }

    return (
        <Stack rowGap={4}>
            <Typography variant='h3'>Informações sobre o curso realizado</Typography>
            <FormGroup>
                <Typography variant='h6'>Como você considera os conhecimentos adquiridos durante o curso para a formação profissional: </Typography>
                <RadioGroup>
                    <FormControlLabel value={'Insatisfatório'} control={<Radio />} label='Insatisfatório' />
                    <FormControlLabel value={'Pouco satisfatório'} control={<Radio />} label='Pouco satisfatório' />
                    <FormControlLabel value={'Sem condições para responder'} control={<Radio />} label='Sem condições para responder' />
                    <FormControlLabel value={'Satisfatório'} control={<Radio />} label='Satisfatório' />
                    <FormControlLabel value={'Muito satisfatório'} control={<Radio />} label='Muito satisfatório' />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>A contribuição do estágio curricular para seu desenvolvimento profissional foi: </Typography>
                <RadioGroup>
                    <FormControlLabel value={'Insatisfatório'} control={<Radio />} label='Insatisfatório' />
                    <FormControlLabel value={'Pouco satisfatório'} control={<Radio />} label='Pouco satisfatório' />
                    <FormControlLabel value={'Sem condições para responder'} control={<Radio />} label='Sem condições para responder' />
                    <FormControlLabel value={'Satisfatório'} control={<Radio />} label='Satisfatório' />
                    <FormControlLabel value={'Muito satisfatório'} control={<Radio />} label='Muito satisfatório' />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Que conceito você atribui ao curso que realizou?</Typography>
                <RadioGroup>
                    <FormControlLabel value={'Insatisfatório'} control={<Radio />} label='Insatisfatório' />
                    <FormControlLabel value={'Pouco satisfatório'} control={<Radio />} label='Pouco satisfatório' />
                    <FormControlLabel value={'Sem condições para responder'} control={<Radio />} label='Sem condições para responder' />
                    <FormControlLabel value={'Satisfatório'} control={<Radio />} label='Satisfatório' />
                    <FormControlLabel value={'Muito satisfatório'} control={<Radio />} label='Muito satisfatório' />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Com base na sua experiência, enquanto acadêmico, em que aspecto o curso deveria propor melhorias para qualificar melhor o formando?</Typography>
                <FormControlLabel control={<Checkbox />} label='Currículo do curso' />
                <FormControlLabel control={<Checkbox />} label='Estágio Obrigatório' />
                <FormControlLabel control={<Checkbox />} label='TCC' />
                <FormControlLabel control={<Checkbox />} label='Qualificação dos professores' />
                <FormControlLabel control={<Checkbox />} label='Metodologia de ensino' />
                <FormControlLabel control={<Checkbox />} label='Atividades práticas' />
                <FormControlLabel control={<Checkbox />} label='Projetos de extensão' />
                <FormControlLabel control={<Checkbox />} label='Eventos' />
                <FormControlLabel control={<Checkbox />} label='Outros (descrever)' onChange={handleOthers} />
                {others ? <TextField variant='filled' /> : <></>}
            </FormGroup>
            <FormGroup>
                <Typography variant='h6'>Atua profissionalmente na sua área de formação?</Typography>
                <RadioGroup sx={{ marginBottom: '2rem' }}>
                    <FormControlLabel control={<Radio />} label='Sim' value={'sim'} onChange={turnJobOthersFalse} />
                    <FormControlLabel control={<Radio />} label='Não' value={'nao'} onChange={handleJobOthers} />
                </RadioGroup>
                {jobOthers ? <Box>
                    <Typography variant='h6'>Assinale o motivo: </Typography>
                    <RadioGroup>
                        <FormControlLabel control={<Radio />} label='Insegurança em atuar na área de formação' value={'1'} onChange={turnOthersReasonsFalse} />
                        <FormControlLabel control={<Radio />} label='Salário melhor em outra área' value={'2'} onChange={turnOthersReasonsFalse} />
                        <FormControlLabel control={<Radio />} label='Falta de oportunidade profissional' value={'3'} onChange={turnOthersReasonsFalse} />
                        <FormControlLabel control={<Radio />} label='Outros motivos (descrever)' value={'4'} onChange={handleOthersReasons} />
                        {othersReasons ? <TextField variant='filled' /> : <></>}
                    </RadioGroup>
                </Box> : <></>}
            </FormGroup>
        </Stack>
    )
}

export default CourseInfoData