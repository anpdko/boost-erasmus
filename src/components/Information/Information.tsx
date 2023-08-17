import s from './Information.module.scss'
import useIncScrollNumber from '../../hooks/useIncScrollNumber'
import icon3 from '../../assets/icon-rife-free14.gif'
import icon2 from '../../assets/icon-rife-free2.gif'
import icon1 from '../../assets/icon-rife-free8.png'

const Information = () => {
   const box1Ref = useIncScrollNumber(900099)
   const box2Ref = useIncScrollNumber(2000)
   const box3Ref = useIncScrollNumber(4)

   return (
      <div className={s.information}>
         <div className={s.box_info}>
            <img className={s.icon} src={icon1} alt="icon" />
            <h3><span ref={box1Ref}>0</span><p>€</p></h3>
            <h4>GRANT AMOUNT</h4>
         </div>
            <div className={s.box_info}>
         <img className={s.icon} src={icon2} alt="icon" />
            <h3><span ref={box2Ref}>0</span><p>+</p></h3>
            <h4>STUDENTS</h4>
         </div>
         <div className={s.box_info}>
            <img className={s.icon} src={icon3} alt="icon" />
            <h3><span ref={box3Ref}>0</span><p>+</p></h3>
            <h4>COUNTRIES</h4>
         </div>
      </div>
   );
};
export default Information