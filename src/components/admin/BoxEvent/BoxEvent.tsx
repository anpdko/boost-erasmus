import {useState} from 'react'
import s from './BoxEvent.module.scss'
import { ButtonApp, InputApp, InputFileApp, TextareaApp, LoaderDownload } from '../../UI'
import { uploadImg } from '../../../services/upload.service'
import { useNavigate } from 'react-router-dom'

interface IProps {
   settings: any;
   newBook: any;
   setNewBook: any;
   getNewBook: any;
}

const BoxBook = ({settings, newBook, setNewBook, getNewBook}:IProps) => {
   const [loader, setLoader] = useState(false)
   const navigate = useNavigate()

   //change
   const changeTextBook = (e:any) => {
      setNewBook({...newBook, [e.target.name]: e.target.value})
   }

   const changeAndUploadCover = (e:any) => {
      setLoader(true)
      uploadImg(e.target.files[0], e.target.name)
      .then(res => {
         if(res){
            console.log(res.data)
            setNewBook({...newBook, [e.target.name]: res.data})
         }
         setLoader(false)
      })
      .catch(err => {
         console.log(err)
         setLoader(false)
      })
   }

   return (
      <div className={s.box_create} onClick={()=>navigate('/admin/panel')}>
         {loader && <LoaderDownload/>}
         <div 
            className={s.create} 
            onClick={(e)=>e.stopPropagation()}
         >
            <div className={s.menu}>
               <div></div>
               <h2>{settings?.title}</h2>
               <i className={['bi bi-x-lg', s.close].join(" ")} onClick={()=>navigate('/admin/panel')}></i>
            </div>
            <div className={s.inps}>
               <InputApp 
                  name = 'title'
                  value={newBook.title || ''}
                  onChange = {changeTextBook}
                  placeholder = 'Назва'
               >
                  <i className="bi bi-book"></i>
               </InputApp>
               <InputApp 
                  name = 'author'
                  onChange = {changeTextBook}
                  value={newBook.author || ''}
                  placeholder = 'Автор'
               >
                  <i className="bi bi-person"></i>
               </InputApp>
               <InputFileApp 
                  name="imgCover"
                  onChange={changeAndUploadCover} 
                  accept="image/png, image/jpeg"
                  placeholder = 'Виберіть обкладенку'>
                  <i className="bi bi-image"></i>
               </InputFileApp>
               <TextareaApp 
                  name = 'body'
                  onChange = {changeTextBook}
                  value={newBook.body || ''}
                  placeholder='Опис книги' 
                  className={s.textarea}
               />
            </div>
            <ButtonApp onClick = {getNewBook}>
               {settings?.btn}
            </ButtonApp>
         </div>
      </div>
   );
};
export default BoxBook