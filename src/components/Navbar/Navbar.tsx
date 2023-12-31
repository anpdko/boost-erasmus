import { useState, useEffect } from 'react'
import s from './Navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import {Translation } from '../../components'
import { useTranslation } from 'react-i18next';
import logoImg1 from "../../assets/logo1.webp"
import logoImg2 from "../../assets/logo2.jpg"
import logoImg3 from "../../assets/mon_logo_on_white_eng-1.png"

const data =  [
   {
      id: "1",
      link: "/",
      title: "main_menu_home"
   },
   {
      id: "2",
      link: "/about",
      title: "main_menu_about"
   },
   {
      id: "3",
      link: "/partners",
      title: "main_menu_partners"
   },
   {
      id: "4",
      link: "/events",
      title: "main_menu_events"
   },
   // {
   //    id: "6",
   //    link: "/events",
   //    title: "Project Outcomes"
   // }, 
   {
      id: "5",
      link: "/contacts",
      title: "Contacts"
   },
]

const Navbar = () => {
   const [toggle, setToggle] = useState(false)
   const {t} = useTranslation()
   const isActive = ({ isActive }: { isActive: boolean }) => {
      return isActive ? s.active : ""
   }

   useEffect(() => {
      if(toggle) {
         document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'auto';
      };
    }, [toggle]);


   const toggleActive = (): string => {
      return toggle ? "active" : ""
   }

   return (
      <div className={s.container_nav}>
         <div className={s.box_nav}>
            <div className="container">
               <nav className={s.nav}>
                  <Link className={s.box_logo} to="/">
                     <img className={s.logo2} src={logoImg2} alt="logo2" />
                     <img className={s.logo1} src={logoImg1} alt="logo1" />
                     <img className={s.logo3} src={logoImg3} alt='logo3' />
                  </Link>
                  <div 
                     className={[s.toggle, s[toggleActive()]].join(' ')} 
                     onClick={() => setToggle(!toggle)}
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className={[s.right, s[toggleActive()]].join(" ")}>
                     <ul className={s.main_menu}>
                        {data.map((item) =>
                           <li key={item.id} >
                              <NavLink
                                 onClick={() => setToggle(false)}
                                 className={isActive} 
                                 to={item.link}
                              >
                                 {t(item.title)}
                              </NavLink>
                           </li>
                        )}
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