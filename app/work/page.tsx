import React from 'react'
import Portfolio__HP from '../elements/Portfolio/Portfolio__HP'
import ContainerWrap__narrow from '../components/ContainerWrap/ContainerWrap__narrow'
import { pagePortfolioData } from '../api/data'
const Work = () => {

    return (
        <div>
            <ContainerWrap__narrow>
                <Portfolio__HP data={pagePortfolioData} />
            </ContainerWrap__narrow>
        </div>
    )
}

export default Work