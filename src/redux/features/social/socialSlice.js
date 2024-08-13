import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";

const token = localStorage.getItem("access");

const initialState = {
  social_media: {},
  status: "idle",
  error: null,
};

// create fetch user
export const fetchUploadSocialMedia = createAsyncThunk(
  "social_media/fetchUploadSocialMedia",
  async ({ facebook, twitter, instagram, linkedin }) => {
    console.log("facebook:", facebook);
    const body = JSON.stringify({
      facebook,
      twitter,
      instagram,
      linkedin,
    });
    console.log("body", body);
    const response = await fetch(`${BASE_URL}social_media/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
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
      .addCase(fetchUploadSocialMedia.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUploadSocialMedia.fulfilled, (state, action) => {
        state.status = "success";
        state.social_media = action.payload;
      })
      .addCase(fetchUploadSocialMedia.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export reducer
export default socialSlice.reducer;
