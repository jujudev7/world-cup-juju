import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import Palmares from './components/Palmares';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <div className="main">
        <Palmares />
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
