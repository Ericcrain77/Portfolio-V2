import './App.css';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import ProjectCards from './components/ProjectCards/ProjectCards';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <ProjectCards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
