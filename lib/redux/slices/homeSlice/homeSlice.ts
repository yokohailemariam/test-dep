import {
  HomeCategoryItemRes,
  HomeCategoryState,
  VoteResultCategory
} from "@/lib/types"
import { createSlice } from "@reduxjs/toolkit"
import { getCategories, getVoteResult } from "./homeThunk"

const initialState: HomeCategoryState = {
  items: [],
  voteResult: [],
  status: "loading",
  error: ""
}

export const homePageSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.items = action.payload as HomeCategoryItemRes[]

      state.status = "idle"
    })
    builder.addCase(getCategories.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.error.message
    }),
      //
      builder.addCase(getVoteResult.pending, (state) => {
        state.status = "loading"
      })
    builder.addCase(getVoteResult.fulfilled, (state, action) => {
      state.voteResult = action.payload as VoteResultCategory[]

      state.status = "idle"
    })
    builder.addCase(getVoteResult.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.error.message
    })
  }
})

export default homePageSlice.reducer
