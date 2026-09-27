import { Routes, Route, Link } from 'react-router-dom'
import { About } from './Pages/About'
import { FishCreatures } from './Pages/FishCreatures'
import { Scan } from './Pages/Scan'
import './App.css'

export default function App() {
  return (
    <>
      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/fish-creatures">Fish Creatures</Link>
        <Link to="/scan">Scan</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/fish-creatures" element={<FishCreatures />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </>
  )
}
