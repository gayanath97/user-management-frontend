import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AddOrUpdateUser from './components/AddOrUpdateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddOrUpdateUser />} />
        <Route path="/update/:id" element={<AddOrUpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
