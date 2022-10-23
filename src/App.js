import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer'

function App() {
  return (    
    <div className="container">
      <Header />
      <MainComponent darkMode="dark"/>
      <Footer />
    </div>
  );
}

export default App;
