import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MainComponent from './components/MainComponent';

function App() {
  return (    
    <div className="App">
      <div className="container">
        <Hero />
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
