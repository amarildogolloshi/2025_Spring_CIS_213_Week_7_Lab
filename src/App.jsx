import './App.css'
import {  HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NowPlaying from './pages/NowPlaying'
import About from './pages/About'
import NotFound from './pages/NotFound'
import MoviesReviews from './pages/MoviesReviews'
import ContainerLayout from './components/ContainerLayout'
import Contact from './pages/Contact'

function App() {
  return (
    <ContainerLayout>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies-reviews" element={<MoviesReviews/>} />
        <Route path="/now-playing" element={<NowPlaying/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Router>
    </ContainerLayout>
  )
}

export default App
