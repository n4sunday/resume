import React from 'react'
import EducationCard from './common/EducationCard'

const Educational = ({ refEducational }) => {

    return (
        <div className="educational" ref={refEducational}>
            <h1 data-aos='fade-down' data-aos-delay='100'>Educational History</h1>
            <div>
                <div data-aos='fade-right'>
                    <EducationCard
                        at="Prince of Songkla University"
                        year="2016-2020"
                        department="Department of Computer Engineering Faculty of Engineering"
                        gpa="2.96"
                        location="Kathu, Phuket"
                    />
                </div>
                <div data-aos='fade-left'>
                    <EducationCard
                        at="Thung Song Wittaya School"
                        year="2010-2018"
                        department="Scienes-Mathematical"
                        gpa="2.76"
                        location="Thung Song, Nakhon Si Thammarat"
                    />
                </div>
            </div>
        </div>
    )
}

export default Educational