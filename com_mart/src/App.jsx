import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyShop from './components/WhyShop';
import Locations from './components/Locations';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <WhyShop />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
