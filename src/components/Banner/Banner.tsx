import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Banner.module.scss'
import { useTranslation } from 'react-i18next';

const Banner = () => {
   const {t} = useTranslation()
   return (
      <div className={s.banner}>
         <div className={s.content}>
            <h3>MAIN PRIORITY AND GOALS OF THE PROJECT</h3>
            <h2>CURRICULA DEVELOPMENT</h2>
            <p>Curriculum of Teacher of Foreign Languages development. Education of in-service teachers (both school and university teachers, academic staff). Internationalization of education through launching CLIL-based courses and developing multilingual education strategies for UA HEIs and National Recommendations on Multilingual Higher Education.</p>
            <div className={s.btns}>
               <ButtonApp color="orange">{t("Number-head-block")}</ButtonApp>
               <ButtonApp color="blue">{t("about-boost-button")}</ButtonApp>
            </div>
         </div>
      </div>
   );
};
export default Banner