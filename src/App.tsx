import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home/Index'
import Perfil from './pages/Perfil/Index'
import Footer from './components/Footer/Index'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
