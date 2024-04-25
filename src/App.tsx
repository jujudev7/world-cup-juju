import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import Historique from './components/Historique';
import Palmares from './components/Palmares';
import Editions from './components/Editions';
import TopScorers from './components/TopScorers';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/historique/palmares" element={<Palmares />} />
            <Route path="/historique/editions-precedentes" element={<Editions />} />
            <Route path="/historique/meilleurs-buteurs" element={<TopScorers />} />
            {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
