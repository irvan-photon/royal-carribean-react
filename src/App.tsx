import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import MyProfile from './pages/MyProfile';
import ProfileEdit from './pages/ProfileEdit';
//import SettingUpdate from './pages/SettingUpdate';
//import Rewards from './pages/Rewards';

//<Route path="/SettingUpdate" element={<SettingUpdate />} />
//<Route path="/Rewards" element={<Rewards />} />




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
