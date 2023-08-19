import styles from './TextareaApp.module.scss'

interface IProps {
   className: string;
   name: string;
   value: string;
   placeholder: string;
   onChange: any;
}

const TextareaApp = ({className, placeholder, name="", value="", ...props}:IProps) => {
   return (
      <textarea 
         className={`${styles.textarea} ${className}`} 
         placeholder={placeholder} name={name} {...props}
      >   
      </textarea>
   );
};
export default TextareaApp