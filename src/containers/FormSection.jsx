import React from 'react'
import { AcademicData, CourseInfoData, PCDInfo, PersonalData, ProInfoData } from '../components'
import { PaperContainer, InfoPaper, SubmitBtn } from './styles'

const FormSection = () => {
    return (
        <>
            <PaperContainer>
                <InfoPaper>
                    <PersonalData />
                    <AcademicData />
                    <CourseInfoData />
                    <ProInfoData />
                    <PCDInfo />
                    <SubmitBtn variant='contained'>Enviar</SubmitBtn>
                </InfoPaper>
            </PaperContainer>
        </>
    )
}

export default FormSection