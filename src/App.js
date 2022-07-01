import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import ProjectCards from './components/ProjectCards/ProjectCards';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <ProjectCards />
    </>
    
  );
}

export default App;
