import {useEffect} from 'react'
import s from './AdminPanel.module.scss'
import {Dashboard} from '../../../components/admin'
import {Pagination} from '../../../components'
import ButtonApp from '../../../components/UI/ButtonApp/ButtonApp';
import RouterBox from '../../../router/RouterBox'
import {TableList} from "../../../components/admin"
import { useDispatch, useSelector } from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { getBooks } from '../../../store/event/eventSlice'
import {Loader} from '../../../components/UI'

const AdminPanel = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const {books, totalPages, loading} = useSelector((state:any) => state.books)

   const getPagination = (page:number) => {
      dispatch(getBooks({page}))
   }

   useEffect(()=>{
      dispatch(getBooks({page:1}))
   },[dispatch])

   return (
      <div className={s.admin}>
         <RouterBox/>
         <Dashboard/>
         <div className={s.panel}>
            <div className={s.filter}>
               <div className={s.inputs}>

               </div>
               <div className={s.btns}>
                  <ButtonApp type="link" to="create">Create</ButtonApp>
               </div>
            </div>

            <div className={s.data}>      
                  {loading?<Loader/>:''}
                  <TableList 
                     list={books}
                  />
                  <Pagination 
                     pagination={getPagination} 
                     totalPages={totalPages}
                  />
               </div>
         </div>
      </div>
   );
};
export default AdminPanel