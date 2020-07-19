import React from 'react'

const ContactIcon = ({ icon, children }) => (
    <div className="contact-icon">
        <span>{icon}</span>
        {children}
    </div>
)

export default ContactIcon