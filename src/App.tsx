
import Hero from './components/Hero';
import About from './components/About';
import Logos from './components/Logos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-primary overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
       <Logos />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
}
