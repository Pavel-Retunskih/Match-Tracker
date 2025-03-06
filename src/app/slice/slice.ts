import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
  initialState: {
    filter: 'all'
  },
  name: 'AppSlice',
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const {changeFilter} = appSlice.actions;