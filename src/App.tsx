import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar, Footer, ScrollToTop } from "./components";
import './App.css'
import { Home } from './views'

// Defer everything that isn't the landing page — keeps first paint lean.
const AIChat = lazy(() => import('./components/AIChat').then((m) => ({ default: m.AIChat })))
const About = lazy(() => import('./views/About/About'))
const Products = lazy(() => import('./views/Products/Products'))
const Pricing = lazy(() => import('./views/Pricing/Pricing'))
const Contact = lazy(() => import('./views/Contact/Contact'))
const Login = lazy(() => import('./views/Login/Login'))
const Resources = lazy(() => import('./views/Resources/Resources'))
const GuideDetail = lazy(() => import('./views/Resources/GuideDetail'))
const Prompts = lazy(() => import('./views/Prompts/Prompts'))
const Privacy = lazy(() => import('./views/Legal/Privacy'))
const Terms = lazy(() => import('./views/Legal/Terms'))
const Cookies = lazy(() => import('./views/Legal/Cookies'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/prodcuts' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resources' element={<Resources />} />
          {/* Category browse reuses the library index, scoped by :category. */}
          <Route path='/resources/category/:category' element={<Resources />} />
          <Route path='/resources/:slug' element={<GuideDetail />} />
          <Route path='/prompts' element={<Prompts />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cookies' element={<Cookies />} />
          {/* Unknown paths fall back to home rather than an empty shell */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
      <Footer />
      <Suspense fallback={null}>
        <AIChat />
      </Suspense>
    </>
  )
}

export default App
