import { VoteType } from "@/lib/types"
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit"
import { getVotersIpAddress, voteCandidates } from "./indentityThunk"
import toast from "react-hot-toast"

const initialState: VoteType = {
  identity: {
    ip: "",
    fingerprint: ""
  },
  voteResult: "",
  status: "idle",
  error: ""
}

export const voteError = createAction("identity/voteError")

export const identitySlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    setFingerprintVote: (state, action: PayloadAction<string>) => {
      state.identity.fingerprint = action.payload
    },
    clearVotingState: (state) => {
      state.voteResult = ""
      state.error = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getVotersIpAddress.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(getVotersIpAddress.fulfilled, (state, action) => {
      state.identity.ip = action.payload as string

      state.status = "idle"
    })
    builder.addCase(getVotersIpAddress.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.error.message
    })
    //
    builder.addCase(voteCandidates.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(voteCandidates.fulfilled, (state, action) => {
      state.voteResult = JSON.stringify(action.payload)
      if (action.payload) {
        toast.success("Thank you, your vote has been counted!")
      }
      state.status = "idle"
    })
    builder.addCase(voteCandidates.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.error.message
    })
  }
})

export const { setFingerprintVote, clearVotingState } = identitySlice.actions

export default identitySlice.reducer
