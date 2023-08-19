
import s from './About.module.scss'
import { Header } from "../../components"
import headerImg from '../../assets/header.jpg'
import {useTranslation} from 'react-i18next'

const About = () => {
   const {t} = useTranslation()


   return (
      <div className={s.about}>
         <Header img={headerImg}>
            <h1>{t("about-boost-h1")}</h1>
         </Header>

         <div className='container'>
            <div className={s.content}>
               <div dangerouslySetInnerHTML={{ __html: t("About-text-HTML") }} />
            </div>
            
         </div>


      </div>
   );
};
export default About