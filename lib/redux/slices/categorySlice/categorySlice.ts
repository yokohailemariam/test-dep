import { Category, HomeCategoryResType, Result } from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'
import { getAllCategories, getSingleVoteCategory } from './categoryThunk'

const initialState: Category = {
  categoryDetail: {
    id: 0,
    candidates: [],
    category_name: '',
    category_description: '',
    category_coverImage: '',
    is_top_category: false,
    encoder_ID: '',
    created_at: '',
    updated_at: ''
  },
  items: [],
  status: 'loading',
  error: ''
}

export const categorySlice = createSlice({
  name: 'identity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleVoteCategory.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getSingleVoteCategory.fulfilled, (state, action) => {
      state.categoryDetail = action.payload as HomeCategoryResType
      state.error = ''
      state.status = 'idle'
    })
    builder.addCase(getSingleVoteCategory.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.error.message
    }),
      builder.addCase(getAllCategories.pending, (state) => {
        state.status = 'loading'
      })
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.items = action.payload as Result[]

      state.status = 'idle'
    })
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.error.message
    })
  }
})

export default categorySlice.reducer
