import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedicamentService from 'src/services/medicaments'

type State = {
  medicaments: any
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined | { [key: string]: string[] }
}

const initialState: State = {
  medicaments: [],
  status: 'idle',
  error: null
}

// Thunk
export const getAllMedicaments = createAsyncThunk('medicaments/getAll', async (_,{ rejectWithValue }) => {
    try {
      const response = await MedicamentService.getAllMedicaments()

      return response
    } catch (err: any) {
      if (!err.response) {
        throw err
      }
  
      return rejectWithValue(err.response.data)
    }
  })
  
  // Slice
  const getAllMedicamentsSlice = createSlice({
    name: 'medicaments/getAll',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(getAllMedicaments.pending, state => {
          state.status = 'loading'
        })
        .addCase(getAllMedicaments.fulfilled, (state, action) => {
          state.status = 'succeeded'
  
          state.medicaments = action.payload
        })
        .addCase(getAllMedicaments.rejected, (state, action) => {
          state.status = 'failed'
          if (action.payload) {
            // If a payload is available, it means we have a response from the server
            //@ts-ignore
            state.error = action.payload
          } else {
            // Otherwise, we only have an error message
            state.error = action.error.message
          }
        })
    }
  })
  
  export default getAllMedicamentsSlice.reducer
  
