import styles from './TableItem.module.scss'
import { ButtonLittleApp } from '../../UI'
import { subText, isPublisher } from '../../../services/text.services'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { deleteBook, IBook } from '../../../store/event/eventSlice'

interface IProps {
   id: any;
   obj: IBook;
}

const TableItem = ({ id, obj }: IProps) => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   // const regexp = /<[^<>]+>/g;
   return (
      <tr>
         {Object.values(obj).map((item, index) =>
            <td key={index}>
               {typeof (item) === 'boolean' ? isPublisher(item) : subText(item, 200)}
            </td>
         )}
         <td className={styles.btns}>
            <Link to={`edit/${id}`}>
               <ButtonLittleApp color='blue'>
                  <i className="bi bi-pencil-fill"></i>
               </ButtonLittleApp>
            </Link>
            <ButtonLittleApp color='red' onClick={
               () => dispatch(deleteBook({ id }))
            }>
               <i className="bi bi-trash-fill"></i>
            </ButtonLittleApp>
         </td>
      </tr>
   );
};
export default TableItem