import s from './Home.module.scss'
import { HeaderMain, CardsMain, SectionTitle, Partners } from '../../components';
import backImg from '../../assets/back.png'
import { useTranslation } from 'react-i18next';

const Home = () => {
   const {t} = useTranslation()
   return (
      <div className={s.home}>
         <HeaderMain />
         <CardsMain/>
         <SectionTitle img={backImg}>
            {t("The target country is Ukraine, and the project partner countries are Estonia, Poland, Slovenia")}
         </SectionTitle>
         <div className="container">
            <Partners/>
         </div>
      </div>
   );
};
export default Home
