import React from 'react'

const ParticipantCard = ({ src, name, participant }) => (
    <div className="participant-card"  data-aos="zoom-in">
        <img src={src} alt="name" />
        <main>
            <h2>{participant}</h2>
            <p>
                {name}
            </p>
        </main>


    </div>
)

export default ParticipantCard