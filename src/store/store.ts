import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin/adminSlice.ts'

export default configureStore({
   reducer: {
      admin: adminSlice,
   }
})