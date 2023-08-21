import { useState, useEffect } from 'react'
import s from './EventPage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from 'react-router-dom'
import { getBook } from '../../store/event/eventSlice'
import { IBook } from '../../store/event/eventSlice';
import { Loader } from '../../components/UI'
import { Header } from '../../components'

const API_URL = import.meta.env.VITE_API_URL;

const EventPage = () => {
   const [book, setBook] = useState<IBook | null>(null)
   const { books, loading } = useSelector((state: any) => state.books)
   const bookId = String(useParams().id)
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

   const getBookObj = async () => {
      if (books.length) {
         const bookTemp = await books.find((item: any) => String(item._id) === bookId)
         if (bookTemp) {
            setBook(bookTemp)
         }
      }
      else {
         if (bookId) {
            await dispatch(getBook(bookId))
         }
      }
   }

   useEffect(() => {
      getBookObj()
   }, [])

   useEffect(() => {
      setBook(books.find((item: any) => String(item._id) === bookId))
   })
   
   if(loading || !book){
      return <Loader />
   }

   return (
      <div className={s.event}>

         <Header img={API_URL + "/static/images/" + book.imgCover}>
            <h1>{book.title}</h1>
         </Header>

         <div className='container'>
            <div className={s.body} dangerouslySetInnerHTML={{ __html: book.body}} />
         </div>
      </div>

   );
};
export default EventPage