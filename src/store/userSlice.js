import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { SetLogin } = userSlice.actions;
export default userSlice.reducer;
