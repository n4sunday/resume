import React from 'react'

const EducationCard = (props) => {
    const { at, year, department, gpa, location } = props

    return (

        <div className="education-card">
            <div className="college">
                <span className="badge">{year}</span><h2>{at}</h2>
            </div>
            <div className="location">{location}</div>
            <div className="item">{department}</div>
            <div className="item">GPA : {gpa}</div>
        </div>
    )
}

export default EducationCard