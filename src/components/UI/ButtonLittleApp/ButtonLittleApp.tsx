import React from 'react'
import styles from './ButtonLittleApp.module.scss'

interface IButtonProps {
   children: React.ReactNode;
   className?: string;
   color?: "blue" | "red";
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const ButtonLittleApp = ({children, className, color = "blue", onClick}:IButtonProps) => {
   return (
      <button
         onClick = {onClick}
         className={`
            ${styles.btn} 
            ${styles[color]}
            ${className}
      `}>
         {children}
      </button>
   );
};
export default ButtonLittleApp