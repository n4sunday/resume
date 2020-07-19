import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Educational from './components/Educational.jsx'
import WorkExperience from './components/WorkExperience'

function App() {
  const refProfile = useRef(null)
  const refEducational = useRef(null)

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Navbar scrollToRef={scrollToRef} refProfile={refProfile} refEducational={refEducational} />
      <Profile refProfile={refProfile} />
      <Educational refEducational={refEducational} />
      <WorkExperience />
    </div>
  );
}

export default App;
