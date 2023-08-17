import s from './Header.module.scss'

interface IProps {
   children: React.ReactNode;
   img: string
}

const Header = ({children, img}:IProps) => {
   return (
      <header className={s.header}>
         <div className={s.box_img}>
            <img className={s.header_img} src={img} alt="header" />
         </div>
         <div className={s.effect_img}></div>
         <div className={s.box_content}>
            {children}
         </div>
      </header>
   );
};
export default Header