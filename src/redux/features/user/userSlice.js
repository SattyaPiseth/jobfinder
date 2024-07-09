import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, verifyOtpCode } from '../../api/userApi';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

// Helper function to extract error message
const getErrorMessage = (error) => {
    return error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An unexpected error occurred";
};

// Asynchronous thunk for user registration
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await register(userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

// Asynchronous thunk for user login
export const loginUser = createAsyncThunk(
    'user/login',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await login(userCredentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

// Asynchronous thunk for OTP verification
export const verifyOtp = createAsyncThunk(
    'user/verifyOtp',
    async ({ email, otp_code }, { rejectWithValue }) => {
        try {
            const response = await verifyOtpCode({ email, otp_code });
            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

// User slice definition
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
