import { Routes, Route } from 'react-router-dom'
import { Home, About, Partners, Events, AdminAuth } from './pages'
import { Navbar, Footer } from './components';

const AppRoutes = () => {
  return (
    <div>
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

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<AppRoutes/>}/>
        <Route path='/admin' element={<AdminAuth/>}/>
      </Routes>
    </div>
  )
}

export default App
