import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedicamentService from 'src/services/medicaments'
import { Medicament } from 'src/types/apps/medicament'

type State = {
  medicaments: Array<Medicament>
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined | { [key: string]: string[] }
}
const initialState: State = {
  medicaments: [],
  status: 'idle',
  error: null
}

// Thunk
export const getByDenomination = createAsyncThunk(
  'medicaments/getByDenomination',
  async (nom: string, { rejectWithValue }) => {
    try {
      const response = await MedicamentService.getMedicamentByDenomination(nom)

      return response
    } catch (err: any) {
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)
    }
  }
)

// Slice
const getByDenominationSlice = createSlice({
  name: 'medicaments/getByDenomination',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(getByDenomination.pending, state => {
        state.status = 'loading'
      })
      .addCase(getByDenomination.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.medicaments = action.payload
      })
      .addCase(getByDenomination.rejected, (state, action) => {
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

export const { reset } = getByDenominationSlice.actions

export default getByDenominationSlice.reducer
