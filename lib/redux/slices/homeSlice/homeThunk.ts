import { createAsyncThunk } from "@reduxjs/toolkit"
import { getHomeCategories, getVoteResults } from "./homeService"

export const getCategories = createAsyncThunk("home/get", async () => {
  const res = await getHomeCategories()
  return res
})

export const getVoteResult = createAsyncThunk("home/voteResult", async () => {
  const res = await getVoteResults()
  return res
})
