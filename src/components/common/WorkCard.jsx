import React from 'react'
import Badge from './Badge'

const WorkCard = (props) => {
    const { name, url, img, dev } = props
    return (
        <div className="work-card">
            <div className="image">
                <div className="link">
                    <div className="bg"></div>
                    {/* <div className="tag">
                        <Badge>{dev}</Badge>
                    </div> */}
                    <div className="detail">
                        <h3>{name}</h3>
                        <a href={url} target="_blank">{url}</a>
                    </div>
                </div>
                <img src={img} alt="image" />
            </div>

        </div>
    )
}

export default WorkCard