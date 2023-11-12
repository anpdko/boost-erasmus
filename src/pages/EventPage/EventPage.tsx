import { useState, useEffect } from 'react'
import s from './EventPage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from 'react-router-dom'
import { getBookUrl } from '../../store/event/eventSlice'
import { IBook } from '../../store/event/eventSlice';
import { Loader } from '../../components/UI'
import { Header } from '../../components'
import { useTranslation } from 'react-i18next';

const API_URL = import.meta.env.VITE_API_URL;

const EventPage = () => {
   const [book, setBook] = useState<IBook | null>(null)
   const { books, loading } = useSelector((state: any) => state.books)
   const bookUrl = String(useParams().url)
   const {t} = useTranslation()
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

   const getBookObj = async () => {
      if (books.length) {
         const bookTemp = await books.find((item: any) => String(item.url) === bookUrl)
         if (bookTemp) {
            setBook(bookTemp)
         }
      }
      else {
         if (bookUrl) {
            await dispatch(getBookUrl(bookUrl))
         }
      }
   }

   useEffect(() => {
      getBookObj()
   }, [])

   useEffect(() => {
      setBook(books.find((item: any) => String(item.url) === bookUrl))
   })
   
   if(loading || !book){
      return <Loader />
   }

   return (
      <div className={s.event}>

         <Header img={API_URL + "/static/images/" + book.imgCover}>
            <h1>{t(book.title)}</h1>
         </Header>

         <div className='container'>
            <div className={s.body} dangerouslySetInnerHTML={{ __html: t(book.body)}} />
         </div>
      </div>

   );
};
export default EventPage