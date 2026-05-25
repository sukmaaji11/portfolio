import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import CurrentProject from './components/CurrentProject';

export default function Home() {
  return (
    <main className="min-h-screen px-6">
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-200/30 blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.1}>
          <section>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <About />
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.2}>
          <section>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <FeaturedWork />
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.3}>
          <section>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10"></div>
            <CurrentProject />
          </section>
        </Reveal>

        <section>
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <Process />
          </div>
        </section>

        <Reveal delay={0.3}>
          <section>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <Contact />
            </div>
          </section>
        </Reveal>
        <Footer />
      </div>
    </main>
  );
}
