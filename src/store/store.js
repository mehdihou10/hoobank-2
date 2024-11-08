import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth';

export const store = configureStore({
    reducer: {
        isSigned: authSlice
    }
})