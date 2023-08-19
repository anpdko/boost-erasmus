import styles from './TableList.module.scss'
import TableItem from '../TableItem/TableItem';
import {IBook} from '../../../store/event/eventSlice'

interface IProps {
   list:IBook[]
}

const TableList = ({list}:IProps) => {
   return (
      <div className={styles.table}>
         <div className={styles.table_scroll}>
            <table>
               <thead>
                  <tr>
                     {!!list.length && 
                        Object.keys(list[0]).map(title => 
                           title !== "_id" && <th key={title}>{String(title)}</th>
                        )
                     }
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {!!list.length && 
                     list.map((obj:any) => {
                           const {_id, ...newObj} = obj
                           console.log(newObj)
                           return <TableItem key={_id} id={_id} obj={newObj}/>  
                        }
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};
export default TableList