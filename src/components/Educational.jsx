import React from 'react'
import EducationCard from './common/EducationCard'

const Educational = ({ refEducational }) => {

    return (
        <div className="educational" ref={refEducational}>
            <h1 data-aos='fade-down' data-aos-delay='100'>Educational History</h1>
            <div>
                <div data-aos='fade-right'>
                    <EducationCard />
                </div>
                <div data-aos='fade-left'>
                    <EducationCard />
                </div>
            </div>
        </div>
    )
}

export default Educational