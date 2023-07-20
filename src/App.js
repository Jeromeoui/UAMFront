import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header'
import React from 'react';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import ButtonBaseDemo from './components/HomeImage';
import HomeImage from './components/HomeImage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreReqs from './components/PreReqs';
import Processes from './components/Processes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotFound from './NotFound';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Neogrotesk',
    },
  });
  
  const [isSideMenuOpen, setSideMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setSideMenu(!isSideMenuOpen);
  };

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
      <Header onMenuClick={handleToggleMenu}/>
        <SideMenu isOpen={isSideMenuOpen}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/prereqs" element={<PreReqs/>} />
          <Route path="/processes" element={<Processes/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
