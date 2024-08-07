import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/category-job/categorySlice";
import userSlice from "./features/user/userSlice";
import jobsSlice from "./jobs/jobsSlice";
import socialSlice from "./features/social/socialSlice";


export const store = configureStore({
    reducer: {
        category: categorySlice,
        user: userSlice,
        jobs: jobsSlice,
        social: socialSlice,
    }
});