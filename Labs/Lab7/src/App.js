import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [student] = useState({
    name: 'Nathan Sehatzadeh',
    program: 'Computer Programming and Analysis',
    course: 'COMP3123 - Full Stack Development I',
    lab: 'Lab Week 09'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <h1>Student Information</h1>

        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Program:</strong> {student.program}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Lab:</strong> {student.lab}</p>

      </header>
    </div>
  );
}

export default App;