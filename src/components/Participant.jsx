import React from 'react'
import ParticipantCard from './common/ParticipantCard'
import nsc from '../assets/nsc.jpg'

const Participant = ({ refParticipant }) => {
    return (
        <div className="participant" ref={refParticipant}>
            <h1>Participant</h1>
            <ParticipantCard
                src={nsc}
                participant="NSC 2020"
                name="(T2DX) Tummy DiarrheaDelivery Express"
            />
        </div>
    )
}

export default Participant