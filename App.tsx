import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { Benefits } from './components/Benefits';
import { Comparison } from './components/Comparison';
import { DeepDive } from './components/DeepDive';
import { Expert } from './components/Expert';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';

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