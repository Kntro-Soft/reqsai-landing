import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import Solutions from './components/sections/Solutions'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Solutions />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
