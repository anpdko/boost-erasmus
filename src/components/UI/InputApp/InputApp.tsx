import styles from './InputApp.module.scss'

interface IProps {
   children: React.ReactNode;
   value: string;
   type: string;
   placeholder: string;
   onChange: any;
}

const InputApp = ({children, onChange, ...props}:IProps) => {
   return (
      <div className = {styles.box_input}>
         {children}
         <input onChange={onChange} {...props}/>
      </div>
   );
};
export default InputApp