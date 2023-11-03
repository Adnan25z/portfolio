import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import Particles from './Particles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import Contact from './screens/contactMe/contact';
import Footer from './screens/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="slant-container">
        <Header />
        <Particles />
      </div>
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
