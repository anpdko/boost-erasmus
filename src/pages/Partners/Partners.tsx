import s from './Partners.module.scss'
import { PartnersCards, Header } from "../../components"
import headerImg from '../../assets/header.jpg'
import { useTranslation } from 'react-i18next';

const Partners = () => {
   const {t} = useTranslation()
   return (
      <div className={s.partners}>
         <Header img={headerImg}>
            <h1>{t("boost-partners-h1")}</h1>
         </Header>
         <div className={s.partners_cards}>
            <div className='container'>
               <PartnersCards/>
            </div>
         </div>
      </div>
   );
};
export default Partners