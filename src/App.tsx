import { Routes, Route } from 'react-router-dom'
import { Home, About, Partners, Events } from './pages'
import { Navbar, Footer } from './components';

function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/partners' element={<Partners/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
