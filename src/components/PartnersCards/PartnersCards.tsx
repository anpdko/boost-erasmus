import s from './PartnersCards.module.scss'
import partners from '../../data/partners';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PartnersCards = () => {
   const { i18n } = useTranslation()

   const getLang = () => i18n.language === 'en' ? 'en' : 'ua'

   return (
      <div className={s.partners_cards}>
         {partners.map(partner =>
            <Link to={partner.link} key={partner.id}>
               <div className={s.partner_card}>
                  <img src={partner.img} alt="" />
                  <h3>{partner[getLang()].title}</h3>
               </div>
            </Link>
         )}
      </div>
   );
};
export default PartnersCards