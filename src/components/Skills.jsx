import React, { useState } from 'react'
import SkillsCard from './common/SkillsCard'

const Skills = ({ refSkills }) => {
    const listFrontend = ["React", "Nextjs", "Vue", "Nuxtjs","Semantic UI","Ant Design", "Bootstrap 4"]
    const listBacktend = ["Nodejs", "Express", "Nestjs"]
    const listDatabase = ["MySQL", "MongoDB", "Firebase"]
    const listDevOps = ["Docker"]

    return (
        <div className="skills" ref={refSkills}>
            <h1 data-aos='fade-down' data-aos-delay='100'>Skills</h1>
            <div>
                <section>
                    <div data-aos="fade-right">
                        <SkillsCard
                            head="Front End"
                            list={listFrontend}
                        />
                    </div>
                    <div data-aos="fade-left">
                        <SkillsCard
                            head="Back End"
                            list={listBacktend}
                        />
                    </div>

                </section>
                <section>
                    <div data-aos="fade-right">
                        <SkillsCard
                            head="Database"
                            list={listDatabase}
                        />
                    </div>
                    <div data-aos="fade-left">
                        <SkillsCard
                            head="DevOps"
                            list={listDevOps}
                        />
                    </div>

                </section>
            </div>

        </div>
    )
}

export default Skills