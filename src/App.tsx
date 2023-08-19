import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, About, Partners, Events } from './pages'
import { AdminAuth, AdminPanel } from './pages/admin'
import { Navbar, Footer } from './components';
import { useSelector } from "react-redux";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/events' element={<Events/>}/>
      </Routes>
      <Footer/>
   </React.Fragment>
  )
}

const AdminRoutes = () => {
  const isLoggedIn = useSelector((state:any)=> state.admin.isLoggedIn)

  return (
    <React.Fragment>
      {isLoggedIn
        ?<Routes>
          <Route path='/panel/*' element={<AdminPanel/>}/>
          <Route path="*" element={<Navigate to={'/admin/panel'}/>} />
        </Routes>
        :<Routes>
            <Route path='/auth' element={<AdminAuth/>}/>
            <Route path="*" element={<Navigate to={'auth'}/>} />
        </Routes>
      }
   </React.Fragment>
  )
}

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<AppRoutes/>}/>
        <Route path='/admin/*' element={<AdminRoutes/>}/>
      </Routes>
    </div>
  )
}

export default App
