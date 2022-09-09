import { Box, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { DataForm, DataContainer } from './PersonalData'
import { useState } from 'react'

const PCDInfo = () => {
    const [others, setOthers] = useState(false)
    const [yes, setYes] = useState(false)

    const handleOthers = () => {
        setOthers(!others)
    }

    const turnOthersOff = () => {
        if (others === true) { setOthers(!others) }
    }

    const handleYes = () => {
        setYes(!yes)
    }

    const turnYesOff = () => {
        if (yes === true) { setYes(!yes) }
    }

    return (
        <>
            <DataContainer sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <Typography variant='h3' fontWeight={'200'} textAlign='center' pt={'2rem'}>Informações sobre egressos PCD</Typography>
                <DataForm>
                    <FormGroup>
                        <Typography>Você se enquadra como PCD?</Typography>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} label='Sim' value={'Sim'} onChange={handleYes} />
                            <FormControlLabel control={<Radio />} label='Não' value={'Não'} onChange={turnYesOff} />
                        </RadioGroup>
                        {yes ? <Box>
                            <Typography>Especifique qual deficiência:</Typography>
                            <RadioGroup>
                                <FormControlLabel control={<Radio />} label='Auditiva' value={'Auditiva'} onChange={turnOthersOff} />
                                <FormControlLabel control={<Radio />} label='Física' value={'Física'} onChange={turnOthersOff} />
                                <FormControlLabel control={<Radio />} label='Mental/intelectual' value={'Mental/intelectual'} onChange={turnOthersOff} />
                                <FormControlLabel control={<Radio />} label='Visual' value={'Visual'} onChange={turnOthersOff} />
                                <FormControlLabel control={<Radio />} label='Múltipla' value={'Múltipla'} onChange={turnOthersOff} />
                                <FormControlLabel control={<Radio />} label='Outras' value={'Outras'} onChange={handleOthers} />
                                {others ? <TextField variant='filled' label='Especificar' /> : <></>}
                            </RadioGroup>
                        </Box> : <></>}
                    </FormGroup>
                </DataForm>
            </DataContainer>
        </>
    )
}

export default PCDInfo