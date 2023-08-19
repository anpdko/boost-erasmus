import React, { useState } from 'react';
import styles from './InputFileApp.module.scss';
import { subText } from '../../../services/text.services';

interface IProps {
   children: React.ReactNode;
   name: string;
   value?: string;
   placeholder: string;
   onChange: any;
   accept: string;
}

const InputFileApp = ({ placeholder, name, onChange, value="", accept, children, ...props }: IProps) => {
   const [nameFile, setNameFile] = useState('');

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
         onChange(e);
         setNameFile(files[0]?.name);
      }
   };

   return (
      <div className={styles.file}>
         {children}
         <label htmlFor={name}>{!!nameFile ? subText(nameFile, 17) : placeholder}</label>
         <input
            onChange={handleFileChange}
            {...props}
            name={name}
            value={value}
            accept={accept}
            className={styles.input}
            type="file"
            id={name}
         />
      </div>
   );
};

export default InputFileApp;
