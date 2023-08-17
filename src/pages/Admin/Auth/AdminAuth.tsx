import React, { useState, useEffect } from 'react';
import s from './AdminAuth.module.scss'
import InputApp from '../../../components/UI/InputApp/InputApp';
import ButtonApp from '../../../components/UI/ButtonApp/ButtonApp'
import Loader from '../../../components/UI/Loader/Loader';
import { useDispatch, useSelector } from "react-redux";
import {adminLogin, clearMessage} from '../../../store/admin/adminSlice.ts'
import {ThunkDispatch} from "@reduxjs/toolkit";

interface IData {
   login: string;
   password: string;
} 

const AdminAuth = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
 
   const { loading, message } = useSelector((state:any) => state.admin);
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

   useEffect(() => {
      dispatch(clearMessage());
   }, [dispatch]);

   const onSubmit = () => {
      const data:IData = { login, password }
      dispatch(adminLogin(data))
   }
   

   return (
      <React.Fragment>
         <div className={s.auth}>
            <h1>Вхід</h1>
            <div className={s.inputs}>
               <InputApp onChange={(e:any) => setLogin(e.target.value)} value={login} type="text" placeholder='логін'>
               <i className="bi bi-person-fill"></i>
               </InputApp>
               <span className={s.error}>{message?.login}</span>
               <InputApp onChange={(e:any) => setPassword(e.target.value)} value={password} type="password" placeholder='пароль'>
               <i className="bi bi-lock-fill"></i>
               </InputApp>
               <span className={s.error}>{message?.password}</span>
            </div>
            <ButtonApp onClick={onSubmit}>
               Увійти
            </ButtonApp>
         </div>
         {loading && <Loader/>}
      </React.Fragment>
   );
};
export default AdminAuth