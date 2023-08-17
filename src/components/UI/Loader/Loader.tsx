import styles from './Loader.module.scss'

const Loader = () => {
   return (
         <div className={styles.box_loader}>
            <span className={styles.loader}></span>
         </div>
   );
};
export default Loader