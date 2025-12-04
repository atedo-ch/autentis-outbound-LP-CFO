import { Header } from './Header';
import { Hero } from './Hero';
import { LogoBar } from './LogoBar';
import { Benefits } from './Benefits';
import { Comparison } from './Comparison';
import { DeepDive } from './DeepDive';
import { Expert } from './Expert';
import { Trust } from './Trust';
import { Footer } from './Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main>
        <Hero />
        <LogoBar />
        <Benefits />
        <Comparison />
        <DeepDive />
        <Expert />
        <Trust />
      </main>

      <Footer />
    </div>
  );
}

export default App;