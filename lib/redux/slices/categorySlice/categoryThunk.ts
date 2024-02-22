import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSingleCategory, getVoteCategories } from './categoryService'

//fetch single category
export const getSingleVoteCategory = createAsyncThunk(
  'home/singleCategory',
  async (id: number) => {
    const res = await getSingleCategory(id)
    return res
  }
)

// fetch home page categories list
export const getAllCategories = createAsyncThunk('categories/get', async () => {
  const res = await getVoteCategories()
  return res
})
