import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    const { scrollToRef, refProfile, refSkills, refEducational, refWorkExperience, refParticipant } = props

    const [select, setSelect] = useState('profile')
    const [menu, setMenu] = useState(false)

    return (
        <div className="navbar">
            <div>
                <div className="icon-name" onClick={() => { scrollToRef(refProfile); setSelect('profile') }}>
                    NL
                </div>
            </div>
            <div className="menu">

                <div
                    className={`list ${select === 'profile' ? 'active' : ''}`}
                    onClick={() => { scrollToRef(refProfile); setSelect('profile') }}
                >Profile</div>
                <div
                    className={`list ${select === 'educational' ? 'active' : ''}`}
                    onClick={() => { scrollToRef(refEducational); setSelect('educational') }}
                >Educational</div>
                <div
                    className={`list ${select === 'skills' ? 'active' : ''}`}
                    onClick={() => { scrollToRef(refSkills); setSelect('skills') }}
                >Skills</div>
                <div
                    className={`list ${select === 'work experience' ? 'active' : ''}`}
                    onClick={() => { scrollToRef(refWorkExperience); setSelect('work experience') }}
                >Work Experience</div>
                <div
                    className={`list ${select === 'participante' ? 'active' : ''}`}
                    onClick={() => { scrollToRef(refParticipant); setSelect('participant') }}
                >Participant</div>

            </div>
            <div className="menu-mobile">
                <FontAwesomeIcon icon={faBars} onClick={() => setMenu(!menu)} />
                <div className={`list-mobile ${menu ? "" : "close"}`} >

                    <div
                        className={`list ${select === 'profile' ? 'active' : ''}`}
                        onClick={() => { scrollToRef(refProfile); setSelect('profile'); setMenu(false) }}
                    >Profile</div>
                    <div
                        className={`list ${select === 'educational' ? 'active' : ''}`}
                        onClick={() => { scrollToRef(refEducational); setSelect('educational'); setMenu(false) }}
                    >Educational</div>
                    <div
                        className={`list ${select === 'skills' ? 'active' : ''}`}
                        onClick={() => { scrollToRef(refSkills); setSelect('skills'); setMenu(false) }}
                    >Skills</div>
                    <div
                        className={`list ${select === 'work experience' ? 'active' : ''}`}
                        onClick={() => { scrollToRef(refWorkExperience); setSelect('work experience'); setMenu(false) }}
                    >Work Experience</div>
                    <div
                        className={`list ${select === 'participante' ? 'active' : ''}`}
                        onClick={() => { scrollToRef(refParticipant); setSelect('participant'); setMenu(false) }}
                    >Participant</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar