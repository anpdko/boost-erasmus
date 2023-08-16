import s from './Home.module.scss'
import { Header, CardsMain, Banner } from '../../components';

const Home = () => {
   return (
      <div className={s.home}>
         <Header />
         <CardsMain/>
         <Banner/>
      </div>
   );
};
export default Home