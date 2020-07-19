import React, { useState } from 'react'

const Navbar = (props) => {
    const { scrollToRef, refProfile, refEducational } = props

    const [select, setSelect] = useState('profile')

    return (
        <div className="navbar">
            <div>
                <div className="icon-name" onClick={() => { scrollToRef(refProfile); setSelect('profile') }}>
                    NL
                </div>
            </div>
            <div className="menu">
                <div className={`list ${select === 'profile' ? 'active' : ''}`} onClick={() => { scrollToRef(refProfile); setSelect('profile') }}>Profile</div>
                <div className={`list ${select === 'educational' ? 'active' : ''}`} onClick={() => { scrollToRef(refEducational); setSelect('educational') }}>Educational</div>
                <div className={`list ${select === 'skills' ? 'active' : ''}`}>Skills</div>
                <div className={`list ${select === 'work experience' ? 'active' : ''}`}>Work Experience</div>
            </div>
        </div>
    )
}

export default Navbar