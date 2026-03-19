import { BrowserRouter as Router } from 'react-router-dom'
import BackgroundShapes from './components/common/BackgroundShapes'
import MainLayout from './components/layout/MainLayout'
import AppRoutes from './routes'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <BackgroundShapes />
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  )
}

export default App
