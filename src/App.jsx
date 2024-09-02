import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CourseList from './pages/CourseList'
import CourseDetails from './pages/CourseDetails'
import StudentDashboard from './pages/StudentDashboard'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
