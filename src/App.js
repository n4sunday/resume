import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Profile/>
      <WorkExperience/>
    </div>
  );
}

export default App;
