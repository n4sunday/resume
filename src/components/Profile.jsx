import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import ContactIcon from './common/ContactIcon'
import ProfileImgage from '../assets/profile.jpg'
import AOS from 'aos'

const Profile = () => {
    AOS.init()


    return (
        <div className="profile">
            <section className="left" data-aos="fade-right">
                <img src={ProfileImgage} alt="profile" />
            </section>
            <section className="right" data-aos="fade-left">
                <div>
                    <h1>Nattapon Lueakaew</h1>
                    <div>
                        <p>
                        I graduated Department of Computer Engineering and interested in web developer. I can work well with team members.  I spend my free time learning frameworks and new technology.
                        </p>
                        <ContactIcon icon={<FontAwesomeIcon icon={faEnvelope} />}>
                            s.nattapon.lk@gmail.com
                        </ContactIcon>
                        <ContactIcon icon={<FontAwesomeIcon icon={faPhone} />}>
                            0995218459
                        </ContactIcon>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/sundaynattapon" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="https://github.com/n4sunday" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile