import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageApp from './Home';
import FlagOne from './Flag1';
import FlagTwo from './Flag2';
import FlagThree from './Flag3'; 


// export default function App() {
//   return (
//     <div className="App">
//       <HomePageApp />
//     </div>

//   );
// }

 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePageApp />} />
          <Route path="/flagOne" element={<FlagOne />} />
          <Route path="/flagTwo" element={<FlagTwo />} />
          <Route path="/flagThree" element={<FlagThree />} />
        </Routes>
      </Router>
    )
  }
}

export default App; 