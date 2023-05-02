import 'swiper/swiper.min.css'
// import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'

import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
import Home from './pages/Home'

// import Routes6 from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
