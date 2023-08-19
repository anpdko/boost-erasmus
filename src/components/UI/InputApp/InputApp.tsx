import styles from './InputApp.module.scss'

interface IProps {
   children: React.ReactNode;
   name?: string;
   value: string;
   type?: string;
   placeholder: string;
   onChange: any;
}

const InputApp = ({children, type="text", onChange, name="", ...props}:IProps) => {
   return (
      <div className = {styles.box_input}>
         {children}
         <input onChange={onChange} name={name} type={type} {...props}/>
      </div>
   );
};
export default InputApp