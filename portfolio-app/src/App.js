import './App.scss';
import React from "react";
import Header from "./Components/Header";
import Main from './Components/Main';
import Contact from './Components/Contact';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Contact />
    </div>
  );
}

export default App;
