import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exam from './component/FunctionalComponent'
import Welcome from './component/ClassComponent'
import CheckShortForm from './component/CheckShortForm'

function App() {
  return (
    <div className="App">
      <Exam name="Kannan"  roll="609013" />
      <Welcome name="Kannan"  roll="609013"/>
      <CheckShortForm></CheckShortForm>
    </div>
  );
}

export default App;
