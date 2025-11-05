import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Statistics />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

