import s from './Header.module.scss'
import headerImg from '../../assets/header.jpg'
// import headerImgWebp from '../../assets/header.webp'
import ButtonApp from '../UI/ButtonApp/ButtonApp';
import {useTranslation} from 'react-i18next'

const HeaderMain = () => {
   const {t} = useTranslation()
   return (
      <header className={s.header_main}>
         <div className={s.box_img}>
            {/* <img className={s.header_img} src={headerImgWebp} alt="headerImgWebp" /> */}
            <img className={s.header_img} src={headerImg} alt="header" />
         </div>
         <div className={s.effect_img}></div>
         <div className={s.box_content}>
            <h1>{t("Main-page-title")}</h1>
            <p>{t("Main-header-disc")}</p>
            <ButtonApp shadow="shadow">{t("about-boost-button")}</ButtonApp>
         </div>

         <div className={s.elementor_bottom}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
               <path className={s.elementor_shape_fill} d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
         </div>
      </header>
   );
};
export default HeaderMain