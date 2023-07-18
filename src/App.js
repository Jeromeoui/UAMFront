import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header'
import React from 'react';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import ButtonBaseDemo from './components/HomeImage';
import HomeImage from './components/HomeImage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreReqs from './components/PreReqs';
import Processes from './components/Processes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {

  const [isSideMenuOpen, setSideMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setSideMenu(!isSideMenuOpen);
  };

  return (
    <div className="App" >
      <CssBaseline/>
      <Router>
        <Header onMenuClick={handleToggleMenu}/>
        <SideMenu isOpen={isSideMenuOpen}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/prereqs" element={<PreReqs/>} />
          <Route path="/processes" element={<Processes/>} />
          <Route path="/faq" element={<FAQ/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
