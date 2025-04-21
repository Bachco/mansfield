import React, { FC } from 'react'
import ContainerWrap__narrow from '../components/ContainerWrap/ContainerWrap__narrow'
import { pageContactData } from '../api/data'
import Element__withForm from '../components/ElementWrap/ElementWrap__withForm'
import Contacts__contacts from '../components/Contacts/Contacts__contacts'
const Contact: FC = () => {
    return (
        <ContainerWrap__narrow>
            <Element__withForm data={pageContactData}>
                <Contacts__contacts />
            </Element__withForm>
        </ContainerWrap__narrow>
    )
}

export default Contact