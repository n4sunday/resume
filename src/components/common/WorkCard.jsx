import React from 'react'

const WorkCard = (props) => {
    const { url, img } = props
    return (
        <div className="work-card">
            <div className="image">
                <img src={img} alt="image" />
            </div>
        </div>
    )
}

export default WorkCard