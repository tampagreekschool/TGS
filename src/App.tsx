import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Activities from './components/Activities';
import Staff from './components/Staff';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import StructuredData from './components/StructuredData';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Staff />
        <Registration />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
