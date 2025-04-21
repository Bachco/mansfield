import React from 'react'
import { pageServicesData } from '../api/data'
import ElementWrap__default from '../components/ElementWrap/ElementWrap__default'
import ContainerWrap__narrow from '../components/ContainerWrap/ContainerWrap__narrow'

const Services = () => {
  return (
      <ContainerWrap__narrow>
        <ElementWrap__default data={pageServicesData} />
      </ContainerWrap__narrow>
  )
}

export default Services