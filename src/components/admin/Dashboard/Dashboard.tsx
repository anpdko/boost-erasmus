import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom';
import { adminLogout } from '../../../store/admin/adminSlice'
import { useDispatch } from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { list } from './data'


const Dashboard = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

   return (
      <nav className={styles.dashboard}>
         <h2>Admin Panel</h2>
         <ul>
            {list.map((item, i:number) => 
               <li key={i}>
                  <Link to={item.link}>
                     {item.icon}
                     <span className={i === 0?styles.active:''}>
                        {item.title}
                     </span>
                  </Link>
               </li>
            )}
            <li onClick = {() => dispatch(adminLogout())}>
               <i className="bi bi-box-arrow-left"></i>
               <span>Выйти</span>
            </li>
         </ul>
      </nav>
   );
};
export default Dashboard