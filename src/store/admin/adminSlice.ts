import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import adminService from '../../services/Admin/admin.service';

interface AdminState {
  admin: any | null;
  isLoggedIn: boolean;
  loading: boolean;
  message: string | null;
}

const adminJson = localStorage.getItem("admin");
const admin: any = adminJson ? JSON.parse(adminJson) : null;

const initialState: AdminState = admin
  ? {
      admin,
      isLoggedIn: true,
      loading: false,
      message: null,
    }
  : {
      admin: null,
      isLoggedIn: false,
      loading: false,
      message: null,
    };

interface LoginCredentials {
  login: string;
  password: string;
}

export const adminLogin = createAsyncThunk(
  'admin/adminLogin',
  async ({ login, password }: LoginCredentials, thunkAPI) => {
    try {
      const data = await adminService.login(login, password);
      return { admin: data };
    } catch (error) {
      const message = (error instanceof Error && error.message) || "An error occurred";
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue({ error: message });
    }
  }
);

export const adminLogout = createAsyncThunk(
  "admin/adminLogout",
  async (_, thunkAPI) => {
    await adminService.logout();
    thunkAPI.dispatch(clearAdmin());
    return thunkAPI.rejectWithValue({});
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = "";
    },
    clearAdmin: () => {
      return {
        admin: null,
        isLoggedIn: false,
        loading: false,
        message: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.isLoggedIn = false;
        state.loading = true;
        state.admin = null;
        state.message = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.admin = action.payload.admin;
      })
      .addCase(adminLogin.rejected, (state) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.admin = null;
      });
  },
});

export const { setMessage, clearMessage, clearAdmin } = adminSlice.actions;
export default adminSlice.reducer;
