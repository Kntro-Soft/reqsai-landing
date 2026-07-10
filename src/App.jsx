import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/terminos" element={<Terms />} />
    </Routes>
  )
}
