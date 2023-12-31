import s from './Footer.module.scss'
import logo1 from '../../assets/logo1.webp'
import logo2 from '../../assets/logo2.jpg'
import logoImg3 from "../../assets/mon_logo_on_white_eng-1.png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
   const {t} = useTranslation()
   return (
      <footer className={s.footer}>
         <div className='container'>
            <div className={s.footer_list}>
               <div className={s.box_logo}>
                  <img className={s.logo2} src={logo2} alt="logo2" />
                  <img className={s.logo1} src={logo1} alt="logo1" />
                  <img className={s.logo3} src={logoImg3} alt='logo3'/>
               </div>
               <div className={s.col}>
                  <h3>{t("HEADINGS")}</h3>
                  <ul>
                     <li><Link to="/">{t('Home')}</Link></li>
                     <li><Link to="/about">{t('About BOOST')}</Link></li>
                     <li><Link to="/partners">{t('Partners')}</Link></li>
                     <li><Link to="/events">{t("Events")}</Link></li>
                  </ul>
               </div>

               <div className={[s.col, s.latest_posts].join(' ')}>
                  <h3>{t("LATEST POSTS")}</h3>
                  <ul>
                     <li><Link to="/event/bilat-briefing-pol-ped">Відбувся білатеральний брифінг представників Полтавського педагогічного з проєктним офіцером Європейської комісії за міжнародним проєктом Erasmus+ КА2</Link></li>
                     <li><Link to="/event/2023-may-kickoff-meeting">Kick-off meeting 15-18 May, 2023</Link></li>
                  </ul>
               </div>

               <div className={s.col}>
                  <h3>{t("MODERATORS")}</h3>
                  <ul>
                     <li>Oleksandr Pavlenko</li>
                     <li>Alina Maslova</li>
                     <li>Andrii Priadko</li>
                  </ul>

                  {/* <h3>COORDINATOR</h3>
                  <ul>
                     <li>BOOST project international coordinator
                        Oleksandra Golovko 
                        Tartu University Narva College, Estonia
                        oleksandra.golovko@ut.ee</li>
                  </ul> */}
               </div>
               <div className={s.col}>
                  <h3>BOOST COORDINATOR</h3>
                  <ul>
                     <li>Oleksandra Golovko 
                        Tartu University Narva College, Estonia 
                        <a href="emeil:oleksandra.golovko@ut.ee"> oleksandra.golovko@ut.ee</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className={s.bottom_footer}>
            <div className="container">
               <div className={s.bottom_footer_content}>
                  <div className={s.left}>
                  {t("Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Education and Culture Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them")}
                  </div>
                  <ul className={s.social}>
                     <li> 
                        <a target="_blank" href='https://www.facebook.com/boostUkraine/'>
                           <i className="bi bi-facebook"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer