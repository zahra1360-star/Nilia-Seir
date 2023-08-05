
import './App.css';
import NavbarComponent from './components/UI/Navbar.component';
import FooterComponent from './components/UI/Footer.component'
function App() {
  return (
    <div >
      {/* Navbar */}
      <NavbarComponent />
      {/* Wrapper */}
<div className='wrapper'>
  <h2> Wrapper Component</h2>
</div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
