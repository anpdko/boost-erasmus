import s from './Header.module.scss'

interface IProps {
   children: React.ReactNode;
   img: string
   effectImg?: "color" | "black" | "none"
}

const Header = ({ children, img, effectImg = "black" }: IProps) => {
   return (
      <header className={s.header}>
         <div className={[s.box_img, s[effectImg]].join(" ")}>
            <img className={s.header_img} src={img} alt="header" />
         </div>

         <div className={[s.box_content, 'container'].join(" ")}>
            {children}
         </div>
      </header>
   );
};
export default Header