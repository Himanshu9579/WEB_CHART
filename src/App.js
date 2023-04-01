import { createContext } from 'react';
import Navbar from './component/navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './component/footer/Footer';
import Overview from './pages/overview/Overview';
import Dashboard from './pages/dashboard/Dashboard';
import Analytics from './pages/analytics/Analytics';
import Statistics from './pages/statistics/Statistics';

import militaryData from './data.json';

const allData = createContext();

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <allData.Provider value={militaryData}>
        <Routes>
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/" element={<Overview />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analytics" element={<Analytics />} />
        </Routes>
      </allData.Provider>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
export { allData }
