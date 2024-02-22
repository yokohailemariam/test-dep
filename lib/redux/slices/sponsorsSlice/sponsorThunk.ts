import { createAsyncThunk } from "@reduxjs/toolkit"
import { getSponsorsApi } from "./sponsorService"

export const getSponsorsAsync = createAsyncThunk("sponsors", async () => {
  const response = await getSponsorsApi()
  return response
})
