import React, { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Educational from './components/Educational'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Participant from './components/Participant'

function App() {
  const refProfile = useRef(null)
  const refSkills = useRef(null)
  const refEducational = useRef(null)
  const refWorkExperience = useRef(null)
  const refParticipant = useRef(null)

  useEffect(() => {
    scrollToRef(refProfile)
  }, [])

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Navbar
        scrollToRef={scrollToRef}
        refProfile={refProfile}
        refEducational={refEducational}
        refSkills={refSkills}
        refWorkExperience={refWorkExperience}
        refParticipant={refParticipant}
      />
      <Profile refProfile={refProfile} />
      <Educational refEducational={refEducational} />
      <Skills refSkills={refSkills} />
      <WorkExperience refWorkExperience={refWorkExperience} />
      <Participant refParticipant={refParticipant} />
    </div>
  );
}

export default App;
