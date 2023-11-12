import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import authHeader from '../../services/Admin/header.service'
import { adminLogout } from '../admin/adminSlice'

const API_URL = import.meta.env.VITE_API_URL 


export interface IBook {
   _id: string;
   title: string;
   author: string;
   imgCover: string;
   body: string;
   publisher: boolean;
   published_date: string;
   updated_date: string;
   url:string;
}

interface IPropsGetBooks {
   page: number;
}

interface IPropsCreateBook {
   body: any;
}

interface IPropsPutBook {
   id: string;
   body: any;
}

interface IPropsDeleteBook {
   id: string;
}

interface BooksState {
   books: IBook[];
   totalPages: number;
   loading: boolean | null;
   message: string | null;
}

const initialState: BooksState = {
   books: [],
   totalPages: 0,
   loading: null,
   message: null,
};

export const getBooks = createAsyncThunk(
   'books/getBooks',
   async ({ page }: IPropsGetBooks, thunkAPI) => {
      try {
         const res = await axios.get(`${API_URL}/api/events?page=${page}`);
         console.log(res.data)
         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(setBooks({
            books: res.data.books, 
            totalPages:res.data.totalPages
         }));
         
         return { books: res.data.books, totalPages: res.data.totalPages };
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
         }
         throw error;
      }
   }
);


export const createBook = createAsyncThunk(
   'books/createBook',
   async (data: IPropsCreateBook, thunkAPI) => {
      try {
         const res = await axios.post(`${API_URL}/api/events`, data.body, { headers: authHeader() });
         console.log(res)
         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(addBooks({ book: res.data }));
      } catch (error) {
         console.log(error)
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
            thunkAPI.dispatch(adminLogout());
         }
         return thunkAPI.rejectWithValue((error as Error).message); // Обратите внимание на изменение здесь
      }
   }
);
export const putBook = createAsyncThunk(
   'books/putBook',
   async (data: IPropsPutBook, thunkAPI) => {
      try {
         const res = await axios.put(`${API_URL}/api/events/${data.id}`, data.body, { headers: authHeader() });

         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(changeBook({ book: data.body }));
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
            thunkAPI.dispatch(adminLogout());
         }
         return thunkAPI.rejectWithValue((error as Error).message);
      }
   }
);

export const deleteBook = createAsyncThunk(
   'books/deleteBook',
   async (data: IPropsDeleteBook, thunkAPI) => {
      try {
         const res = await axios.delete(`${API_URL}/api/events/${data.id}`, { headers: authHeader() });

         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(removeBook({ id: data.id }));
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
            thunkAPI.dispatch(adminLogout());
         }
         return thunkAPI.rejectWithValue((error as Error).message);
      }
   }
);

export const getBook = createAsyncThunk(
   'books/getBook',
   async (bookId: string, thunkAPI) => {
      try {
         const res = await axios.get(`${API_URL}/api/events/${bookId}`, { headers: authHeader() });

         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(setBooks({ books: [res.data] }));
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
            thunkAPI.dispatch(adminLogout());
         }
         return thunkAPI.rejectWithValue((error as Error).message);
      }
   }
);

export const getBookUrl = createAsyncThunk(
   'books/getBookUrl',
   async (bookUrl: string, thunkAPI) => {
      try {
         const res = await axios.get(`${API_URL}/api/events/url/${bookUrl}`, { headers: authHeader() });

         if (res.status !== 200) {
            console.log('Server error');
            throw new Error('Server error');
         }

         thunkAPI.dispatch(setBooks({ books: [res.data] }));
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.status === 401) {
            alert(error.response.data.message);
            thunkAPI.dispatch(adminLogout());
         }
         return thunkAPI.rejectWithValue((error as Error).message);
      }
   }
);

export const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      setBooks: (state, action) => {
         state.books = action.payload.books;
         state.totalPages = action.payload.totalPages;
      },
      changeBook: (state, action) => {
         state.books = state.books.map((book) => {
            if (action.payload.book._id === book._id) {
               return action.payload.book;
            }
            return book;
         });
      },
      removeBook: (state, action) => {
         state.books = state.books.filter((book) => book._id !== action.payload.id);
      },
      addBooks: (state, action) => {
         state.books = [...state.books, ...action.payload.book];
      },
   },
   extraReducers: (builder) => {
      builder
         // getBooks
         .addCase(getBooks.pending, (state) => {
            state.loading = true;
            state.message = null;
         })
         .addCase(getBooks.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(getBooks.rejected, (state, action) => {
            if (state) {
               state.loading = false;
               state.message = String(action.payload);
            }
         })
         // createBook
         .addCase(createBook.pending, (state) => {
            state.loading = true;
            state.message = null;
         })
         .addCase(createBook.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(createBook.rejected, (state, action) => {
            if (state) {
               state.loading = false;
               state.message = String(action.payload);
            }
         });
   }
   
})



export const { addBooks, setBooks, changeBook, removeBook } = booksSlice.actions

export default booksSlice.reducer