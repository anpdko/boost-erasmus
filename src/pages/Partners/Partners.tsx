import s from './Partners.module.scss'
import { PartnersCards, Header } from "../../components"
import headerImg from '../../assets/header.jpg'

const Partners = () => {
   return (
      <div className={s.partners}>
         <Header img={headerImg}>
            <h1>MULTIED PARTNERS</h1>
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