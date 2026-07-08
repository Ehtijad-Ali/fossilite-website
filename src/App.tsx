import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar, Footer } from "./components";
import './App.css'
import { Home, Products } from './views'
import About from './views/About/About'

// Defer the chat widget (and its animation code) until after first paint —
// it's not needed for the initial render.
const AIChat = lazy(() =>
  import('./components/AIChat').then((m) => ({ default: m.AIChat })),
)

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prodcuts' element={<Products />} />
      </Routes>
      <Footer />
      <Suspense fallback={null}>
        <AIChat />
      </Suspense>
    </>
  )
}

export default App
