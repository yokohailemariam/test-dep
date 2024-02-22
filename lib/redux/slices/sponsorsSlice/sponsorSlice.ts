import { createSlice } from "@reduxjs/toolkit"
import { getSponsorsAsync } from "./sponsorThunk"
import { SponsorResult } from "./sponsorService"

interface ISponsorsState {
  sponsors: SponsorResult[]
  status: "loading" | "idle" | "rejected"
  error: unknown
}

const initialState: ISponsorsState = {
  sponsors: [],
  status: "loading",
  error: null
}

export const sponsorsSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSponsorsAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(getSponsorsAsync.fulfilled, (state, action) => {
      state.sponsors = action.payload

      state.status = "idle"
    })
    builder.addCase(getSponsorsAsync.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.error.message
    })
  }
})

export default sponsorsSlice.reducer
