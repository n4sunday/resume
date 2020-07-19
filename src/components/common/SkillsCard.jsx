import React from 'react'

const SkillsCard = (props) => {
    const { head, list } = props

    return (
        <div className="skill-card">
            <h3>{head}</h3>
            <div className="skill-items">
                {list && list.map((item, index) => (
                    <div className="badge" key="index">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsCard