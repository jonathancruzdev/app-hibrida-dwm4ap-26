import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header title='APP' />
      <Home />
      <Footer description='Aplicaciones Híbridas | 2026' />
    </>
  )
}

export default App
