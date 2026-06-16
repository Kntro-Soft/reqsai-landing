import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
    </>
  )
}
