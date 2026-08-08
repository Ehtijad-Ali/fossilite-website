import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar, Footer, ScrollToTop, PageSeo } from "./components";
import './App.css'
import { Home } from './views'
import { AuthProvider } from './console/auth'

// Defer everything that isn't the landing page — keeps first paint lean.
const AIChat = lazy(() => import('./components/AIChat').then((m) => ({ default: m.AIChat })))
const About = lazy(() => import('./views/About/About'))
const Products = lazy(() => import('./views/Products/Products'))
const Pricing = lazy(() => import('./views/Pricing/Pricing'))
const Contact = lazy(() => import('./views/Contact/Contact'))
const Resources = lazy(() => import('./views/Resources/Resources'))
const GuideDetail = lazy(() => import('./views/Resources/GuideDetail'))
const Prompts = lazy(() => import('./views/Prompts/Prompts'))
// Business Operating System (POC). Lazy so the marketing site never pays for it.
const ConsoleLayout = lazy(() => import('./views/Console/ConsoleLayout'))
const ConsoleLogin = lazy(() => import('./views/Console/ConsoleLogin'))
const ConsoleOverview = lazy(() => import('./views/Console/Overview'))
const ConsoleArchitecture = lazy(() => import('./views/Console/Architecture'))
const LeadCrm = lazy(() => import('./views/Console/systems/LeadCrm'))
const ConsoleOnboarding = lazy(() => import('./views/Console/systems/Onboarding'))
const ConsoleProjects = lazy(() => import('./views/Console/systems/Projects'))
const ConsoleInvoicing = lazy(() => import('./views/Console/systems/Invoicing'))
const ConsoleSops = lazy(() => import('./views/Console/systems/SopLibrary'))
const ConsoleKpi = lazy(() => import('./views/Console/systems/KpiDashboard'))

const Privacy = lazy(() => import('./views/Legal/Privacy'))
const Terms = lazy(() => import('./views/Legal/Terms'))
const Cookies = lazy(() => import('./views/Legal/Cookies'))

function App() {
  // The console ships its own top bar, sidebar and tab rail, so the marketing
  // chrome is suppressed there rather than stacked on top of it.
  const inConsole = useLocation().pathname.startsWith("/console")

  return (
    <AuthProvider>
      <ScrollToTop />
      <PageSeo />
      {!inConsole && <Navbar />}
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          {/* Historic typo. It used to render Products, which published the
              same page at two URLs; redirect so old links still land without
              splitting the page across two addresses. */}
          <Route path='/prodcuts' element={<Navigate to='/products' replace />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          {/* Superseded by the Business OS sign-in. Kept so existing links
              land somewhere real rather than on a form that does nothing. */}
          <Route path='/login' element={<Navigate to='/console/login' replace />} />
          <Route path='/resources' element={<Resources />} />
          {/* Category browse reuses the library index, scoped by :category. */}
          <Route path='/resources/category/:category' element={<Resources />} />
          <Route path='/resources/:slug' element={<GuideDetail />} />
          <Route path='/prompts' element={<Prompts />} />
          {/* Business Operating System. Its own chrome, so it sits outside the
              marketing Navbar/Footer shell rather than inside it. */}
          <Route path='/console/login' element={<ConsoleLogin />} />
          <Route path='/console' element={<ConsoleLayout />}>
            <Route index element={<ConsoleOverview />} />
            <Route path='leads' element={<LeadCrm />} />
            <Route path='onboarding' element={<ConsoleOnboarding />} />
            <Route path='projects' element={<ConsoleProjects />} />
            <Route path='invoicing' element={<ConsoleInvoicing />} />
            <Route path='sops' element={<ConsoleSops />} />
            <Route path='kpi' element={<ConsoleKpi />} />
            <Route path='architecture' element={<ConsoleArchitecture />} />
          </Route>

          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cookies' element={<Cookies />} />
          {/* Unknown paths fall back to home rather than an empty shell */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
      {!inConsole && <Footer />}
      {!inConsole && (
        <Suspense fallback={null}>
          <AIChat />
        </Suspense>
      )}
    </AuthProvider>
  )
}

export default App
