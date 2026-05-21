import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
