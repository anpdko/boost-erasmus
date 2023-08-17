
import PartnersCards from '../PartnersCards/PartnersCards';
import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Partners.module.scss'

const Partners = () => {
   return (
      <div className={s.partners}>
         <div className={s.content}>
            <h2>MULTIED PARTNERS</h2>
            <h3>UNIVERSITIES FROM 4 COUNTRIES TAKE PART IN THE PROJECT</h3>
         </div>
         <PartnersCards/>
         <div className={s.btns}>
            <ButtonApp>MultiEd Partners</ButtonApp>
         </div>
      </div>
   );
};
export default Partners