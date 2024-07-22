import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/account/Login';
import Home from './pages/Home';
import Itinerary from './pages/book/Itinerary';
import MyProfile from './pages/account/MyProfile';
import ProfileEdit from './pages/account/ProfileEdit';
//import SettingUpdate from './pages/SettingUpdate';
//import Rewards from './pages/Rewards';

//<Route path="/SettingUpdate" element={<SettingUpdate />} />
//<Route path="/Rewards" element={<Rewards />} />



import Checkout from './pages/checkout/checkout'
import CheckoutDateConfirmation from './pages/checkout/dateConfirmation'
import CheckoutCardPriceConfirm from './pages/checkout/cardPriceConfirm'
import CheckoutConfirmation from './pages/checkout/checkoutConfirmation'
import CheckoutAdditionalInput from './pages/checkout/checkoutAdditionalInput'

import StartPlanningSelectDate from './pages/start-planning/selectDate'
import StartPlanningDetail from './pages/start-planning/detailPlanning'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />

        <Route path="/start-planning-select-date" element={<StartPlanningSelectDate />} />
        <Route path="/start-planning-detail" element={<StartPlanningDetail />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-date-confirmation" element={<CheckoutDateConfirmation />} />
        <Route path="/checkout-card-price-confirm" element={<CheckoutCardPriceConfirm />} />
        <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
        <Route path="/checkout-additional-input" element={<CheckoutAdditionalInput />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
