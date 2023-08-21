import React, { useEffect } from 'react'
import s from './Events.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getBooks } from '../../store/event/eventSlice'
import { Loader } from '../../components/UI'
import { Pagination, Header } from '../../components'
import headerImg from '../../assets/header.jpg'
import { IBook } from '../../store/event/eventSlice'
import {subText} from '../../services/text.services'
import {Link} from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL;

const Events = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const { books, totalPages, loading } = useSelector((state: any) => state.books)
   console.log(books)

   const getPagination = (page: number) => {
      dispatch(getBooks({ page }))
   }

   useEffect(() => {
      dispatch(getBooks({ page: 1 }))
   }, [dispatch])

   return (
      <React.Fragment>
          <Header img={headerImg}>
         <h1>EVENTS</h1>
         </Header>
         <div className='container'>
            <div className={s.events}>
               {loading ? <Loader /> : ''}
               {books &&
                  books.map((book: IBook) =>
                     <div key={book._id} className={s.event}>
                        <Link to={"/event/"+book._id} className={s.event_img}>
                           <img src={API_URL + "/static/images/" + book.imgCover} alt="title" />
                           <div className={s.effect}>
                              <i className="bi bi-plus-lg"></i>
                           </div>
                        </Link>
                        <div className={s.content}>
                           <Link to={"/event/"+book._id}><h3>{book.title}</h3></Link>
                           <div className={s.body} dangerouslySetInnerHTML={{ __html: subText(book.body, 150) }} />
                        </div>
                     </div>
                  )
               }
            </div>
            <Pagination
               pagination={getPagination}
               totalPages={totalPages}
            />
         </div>
      </React.Fragment>
     
   );
};
export default Events