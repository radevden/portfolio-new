import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact'; 
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer>
        <hr />
        <Footer />
        <p>
          This project was coded by Denisa Radevová and is open-sourced on{" "}
          <a href="https://github.com/radevden" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
