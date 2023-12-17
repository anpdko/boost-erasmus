import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import { createBook, getBooks } from '../../../store/event/eventSlice';
import  BoxEvent from  '../BoxEvent/BoxEvent'
import { useNavigate } from 'react-router-dom'

interface IData{
   imgCover?: string | undefined;
   author?: string | undefined;
   title?: string | undefined;
   description?: string | undefined;
}

const CreateEvent = () => {
   const [newBook, setNewBook] = useState<IData>({})
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const navigate = useNavigate()


   // get data server
   const getNewBook = () => {
      console.log(newBook)
      if(!!newBook?.imgCover) {
         console.log(newBook)
         dispatch(createBook({body: {
            ...newBook, 
            url: String(Date.now())
         }}))
         dispatch(getBooks({page:1}))
         navigate('admin/panel')
      }
      else{
         alert("Додайте PDF файл!")
      }
   }

   return <BoxEvent 
      settings={{
         title:"Додати захід",
         btn:'Додати захід'
      }}
      newBook={newBook} 
      setNewBook={setNewBook} 
      getNewBook={getNewBook} 
   />;
};
export default CreateEvent