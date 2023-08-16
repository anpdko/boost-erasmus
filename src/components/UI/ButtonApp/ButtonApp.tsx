import React from 'react'
import s from './ButtonApp.module.scss'
import { Link } from 'react-router-dom';

interface ClickableButtonProps {
   children: React.ReactNode;
   className?: string;
   type?: "link" | "";
   to?: string;
   color?: "blue" | "orange";
   shadow?: "shadow" | "";
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonApp = ({ children, className, type="", to="/", color="blue", shadow="", onClick, ...props }: ClickableButtonProps) => {

   if(type === "link"){
      return (
         <Link to={to} 
            className={[s.btn, s[type], s[color], s[shadow], className].join(" ")} {...props}>
            {children}
         </Link>
      )
   }

   return (
      <button {...props}
         onClick={onClick}
         className={[s.btn, s[type], s[color], s[shadow], className].join(" ")}>
         {children}
      </button>
   );
};
export default ButtonApp