
import './App.css';
import './assets/fonts/IranianSans.ttf'
import NavbarComponent from './components/UI/Navbar.component';
import FooterComponent from './components/UI/Footer.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/Home.page";
import LoginPage from '../src/pages/Login.page'
import ContactUsPage from './pages/ContactUs.page';
// import  { useState } from "react";
// import DatePicker from "react-datepicker";

function App() {

  // const [date, setDate] = useState(new Date());
  return (
    <div >
      {/* Navbar */}
      <NavbarComponent />
      {/* Wrapper */}
      <div className='wrapper'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contac-us" element={<ContactUsPage />} />

        </Routes>
        <div>
    {/* <DatePicker selected={date} onChange={(date) => setDate(date)} /> */}
    </div>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;


// routes
// /
// /login
// /contac-us
// /about-us