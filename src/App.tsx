import { Routes, Route } from 'react-router-dom'
import { Home, About, Partners } from './pages'
import { Navbar } from './components';

function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/partners' element={<Partners/>}/>
      </Routes>
   </div>
  )
}

export default App
