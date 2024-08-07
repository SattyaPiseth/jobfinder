import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";

const token = localStorage.getItem("access");

const initialState = {
  social_media: {},
  status: "idle",
  error: null,
};

// Create fetch social media
export const fetchSocialMedia = createAsyncThunk(
  "social_media/fetchSocialMedia",
  async () => {
    // Fetch social media data from the API
    const response = await fetch(`${BASE_URL}profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const platformData = await response.json();
    return platformData;
  }
);

export const socialSlice = createSlice({
  name: "social_media",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialMedia.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSocialMedia.fulfilled, (state, action) => {
        state.status = "success";
        state.social_media = action.payload;
      })
      .addCase(fetchSocialMedia.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export reducer
export default socialSlice.reducer;
