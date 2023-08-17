import s from './Navbar.module.scss'
import logoImg from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import {Translation } from '../../components'

const Navbar = () => {

   const isActive = ({ isActive }: { isActive: boolean }) => {
      return isActive ? s.active : ""
   }

   return (
      <div className={s.container_nav}>
         <div className={s.box_nav}>
            <div className="container">
               <nav className={s.nav}>
                  <Link to="/">
                     <img className={s.logo} src={logoImg} alt="logo" />
                  </Link>
                  <div className={s.right}>
                     <ul className={s.main_menu}>
                        <li><NavLink className={isActive} to="/">Home</NavLink></li>
                        <li><NavLink className={isActive} to="/about">About Boost</NavLink></li>
                        <li><NavLink className={isActive} to="/partners">Partners</NavLink></li>
                        <li><NavLink className={isActive} to="/events">Events</NavLink></li>
                        <li><Translation/></li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};
export default Navbar