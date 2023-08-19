import s from './Home.module.scss'
import { HeaderMain, CardsMain, Banner, SectionTitle, Partners, Information } from '../../components';
import backImg from '../../assets/back.png'
import iconSmile from '../../assets/icon-rife-smile.png'
import { useTranslation } from 'react-i18next';

const Home = () => {
   const {t} = useTranslation()
   return (
      <div className={s.home}>
         <HeaderMain />
         <CardsMain/>
         <Banner/>
         <SectionTitle img={backImg}>
            Four countries are involved in the project - Estonia, Germany, Great Britain and Ukraine
         </SectionTitle>
         <div className="container">
            <Partners/>
         </div>
         <SectionTitle img={backImg}>
            {t("Number-head-block")}
         </SectionTitle>
         <div className="container">
            <Information/>
            <section className={s.about}>
               <h2>WHAT THEY SAY ABOUT MULTIED</h2>
               <div className={s.items}>
                  <div className={s.item}>
                     <p>"I am glad that I am part of this team. Participation in such a project is a great experience for me, for my university and for our country as a whole."</p>
                     <div className={s.bottom_box}>
                        <img src={iconSmile} alt="icon" />
                        <div className={s.info}>
                           <h4>NAME NAME</h4>
                           <p>POSITION</p>
                        </div>
                     </div>
                  </div>
                  <div className={s.item}>
                     <p>"I am glad that I am part of this team. Participation in such a project is a great experience for me, for my university and for our country as a whole."</p>
                     <div className={s.bottom_box}>
                        <img src={iconSmile} alt="icon" />
                        <div className={s.info}>
                           <h4>NAME NAME</h4>
                           <p>POSITION</p>
                        </div>
                     </div>
                  </div>
                  <div className={s.item}>
                     <p>"I am glad that I am part of this team. Participation in such a project is a great experience for me, for my university and for our country as a whole."</p>
                     <div className={s.bottom_box}>
                        <img src={iconSmile} alt="icon" />
                        <div className={s.info}>
                           <h4>NAME NAME</h4>
                           <p>POSITION</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};
export default Home