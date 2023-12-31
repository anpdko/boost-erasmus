import React, {useEffect} from "react"
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Home, About, Partners, Events, EventPage, Contacts } from './pages'
import { AdminAuth, AdminPanel } from './pages/admin'
import { Navbar, Footer } from './components';
import { useSelector } from "react-redux";

const AppRoutes = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path="/event/:url" element={<EventPage/>}/>
      </Routes>
      <Footer/>
   </React.Fragment>
  )
}

const AdminRoutes = () => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:any)=> state.admin.isLoggedIn)

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(isRegistered());
  //   }
  // }, [dispatch, isLoggedIn]);

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
