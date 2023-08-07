
import './App.css';
import './assets/fonts/IranianSans.ttf'
import NavbarComponent from './components/UI/Navbar.component';
import FooterComponent from './components/UI/Footer.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/Home.page";
import LoginPage from '../src/pages/Login.page'
import ContactUsPage from './pages/ContactUs.page';

function App() {
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