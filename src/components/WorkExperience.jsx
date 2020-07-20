import React from 'react'
import WorkCard from './common/WorkCard'
import d2x from '../assets/d2x.png'
import plearnbook from '../assets/plearnbook.png'
import nimble from '../assets/nimble.png'
import ple from '../assets/phuket-local-explore.png'

const WorkExperience = ({ refWorkExperience }) => {
    return (
        <div className="work-experience" ref={refWorkExperience}>
            <h1>Work Experience</h1>
            <div className="box-work">
                <div data-aos="zoom-in-up">
                    <WorkCard
                        img={d2x}
                        name="T-D2X"
                        url="https://d2x.medizerva.com"
                    />
                </div>
                <div data-aos="zoom-in-up">
                    <WorkCard
                        img={plearnbook}
                        name="Plearnbook"
                        url="https://beta.plearnbook.com"
                    />
                </div>
                <div data-aos="zoom-in-up">
                    <WorkCard
                        img={nimble}
                        name="Nimble"
                        url="https://nimble.zonapplication.com"
                    />
                </div>
                <div data-aos="zoom-in-up">
                    <WorkCard
                        img={ple}
                        name="Phuket Local Explore"
                        url="https://dev.werapun.com"
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkExperience