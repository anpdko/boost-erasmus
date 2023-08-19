import s from './Navbar.module.scss'
import logoImg from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import {Translation } from '../../components'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
   const {t} = useTranslation()
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
                        <li><NavLink className={isActive} to="/">{t("main_menu_home")}</NavLink></li>
                        <li><NavLink className={isActive} to="/about">{t("main_menu_about")}</NavLink></li>
                        <li><NavLink className={isActive} to="/partners">{t("main_menu_partners")}</NavLink></li>
                        <li><NavLink className={isActive} to="/events">{t("main_menu_events")}</NavLink></li>
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