import s from './Header.module.scss'
import headerImg from '../../assets/header.png'
import ButtonApp from '../UI/ButtonApp/ButtonApp';

const Header = () => {
   return (
      <header>
         <div className={s.box_img}>
            <img className={s.header_img} src={headerImg} alt="header" />
         </div>
         <div className={s.effect_img}></div>
         <div className={s.box_content}>
            <h1>WELCOME TO BOOST</h1>
            <p>Foreign Language Teacher Training Capacity Development as a Way to Ukraine’s Multilingual Education and European Integration.</p>
            <ButtonApp shadow="shadow">About MultiEd</ButtonApp>
         </div>

         <div className={s.elementor_bottom}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
               <path className={s.elementor_shape_fill} d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
         </div>
      </header>
   );
};
export default Header