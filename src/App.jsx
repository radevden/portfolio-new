import React from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import About from "./About.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <About />
      </main>
      <footer>
      <hr/>
      <Footer />
        <p>
        This project was coded by Denisa Radevová and is open-sourced on <a href="https://github.com/radevden" target="_blank" rel="noopener noreferrer">GitHub</a> and hosted on Netlify</p>
        </footer>
    </div>
  );
}

export default App
