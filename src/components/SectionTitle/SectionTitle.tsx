
import s from './SectionTitle.module.scss'

interface IProps {
   img: string;
   children?: React.ReactNode;
}

const SectionTitle = ({img, children=""}:IProps) => {
   return (
      <section className={s.section_title}>
         <div className={s.content}>
            <h2>{children}</h2>
         </div>
         
         <img src={img} alt="img" />

         <div className={s.filter_box}></div>
         <div className={s.elementor_shape_bottom} data-negative="true">
			   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
               <path className={s.elementor_shape_fill} d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
            </svg>		
         </div>
      </section>
   );
};
export default SectionTitle