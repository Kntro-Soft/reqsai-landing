import { usePageReveal } from '../hooks/usePageReveal'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import HowItWorks from '../components/sections/HowItWorks'
import Features from '../components/sections/Features'
import Solutions from '../components/sections/Solutions'
import Pricing from '../components/sections/Pricing'
import Video from '../components/sections/Video'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'

export default function Landing() {
  usePageReveal()

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Features />
        <Solutions />
        <Video />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
