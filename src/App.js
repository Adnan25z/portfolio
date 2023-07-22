import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Particles from './Particles';
import Header from './screens/header/Header'
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Header />
     <Particles />
     <AboutMe />
    </div>
  );
}

export default App;
