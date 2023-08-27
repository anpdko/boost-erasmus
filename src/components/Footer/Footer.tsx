import s from './Footer.module.scss'
import logo1 from '../../assets/logo1.webp'
import logo2 from '../../assets/logo2.jpg'

const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className='container'>
            <div className={s.footer_list}>
               <div className={s.box_logo}>
                  <img className={s.logo1} src={logo1} alt="logo1" />
                  <img className={s.logo2} src={logo2} alt="logo2" />
               </div>
               <div className={s.col}>
                  <h3>HEADINGS</h3>
                  <ul>
                     <li>Events</li>
                  </ul>
               </div>

               <div className={s.col}>
                  <h3>LATEST POSTS</h3>
                  {/* <ul>
                     <li>MultiEd Professional Development Courses</li>
                     <li>The Global Trend in Bilingual Education</li>
                     <li>Holding a number of international webinars on “Sharing EU Multilingual Education Policing Practices in Ukraine”</li>
                  </ul> */}
               </div>

               <div className={s.col}>
                  <h3>MODERATORS</h3>
                  {/* <ul>
                     <li>Dr. Tetyana Myronenko</li>
                     <li>Dr. Lesia Dobrovolska (MNU)</li>
                  </ul> */}
               </div>
            </div>
         </div>
         <div className={s.bottom_footer}>
            <div className="container">
               <div className={s.bottom_footer_content}>
                  <div className={s.left}>
                     MultiEd – Foreign Language Teacher Training Capacity Development as a Way to Ukraine’s Multilingual Education and European Integration
                  </div>
                  <ul className={s.social}>
                     <li><i className="bi bi-facebook"></i></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer