import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin/adminSlice.ts'
import eventSlice from './event/eventSlice.ts'

export default configureStore({
   reducer: {
      admin: adminSlice,
      books: eventSlice
   }
})