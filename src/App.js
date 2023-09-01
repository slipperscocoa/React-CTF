import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageApp from './Home';
import FlagOne from './Flag1';
import FlagTwo from './Flag2';
import FlagThree from './Flag3';
import FlagFourApp from './Flag4';
import FlagFiveApp from './Flag5';
import AnswersApp from './Answers';  



class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePageApp />} />
          <Route path="/flagOne" element={<FlagOne />} />
          <Route path="/flagTwo" element={<FlagTwo />} />
          <Route path="/flagThree" element={<FlagThree />} />
          <Route path="/flagFour" element={<FlagFourApp />} />
          <Route path="/flagFive" element={<FlagFiveApp />} />
          <Route path="/answers" element={<AnswersApp />} />
        </Routes>
      </Router>
    )
  }
}

export default App; 