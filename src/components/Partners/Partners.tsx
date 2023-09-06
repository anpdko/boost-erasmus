
import PartnersCards from '../PartnersCards/PartnersCards';
import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Partners.module.scss'

import { useTranslation } from 'react-i18next';

const Partners = () => {
    const {t} = useTranslation()
   return (
      <div className={s.partners}>
         <div className={s.content}>
            <h2>{t("Main-partners-h2")}</h2>
            <h3>{t("Main-partners-h3")}</h3>
         </div>
         <PartnersCards/>
         <div className={s.btns}>
            <ButtonApp type = "link" to="/about">{t("about-boost-button")}</ButtonApp>
         </div>
      </div>
   );
};
export default Partners