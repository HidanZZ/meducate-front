import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedicamentService from 'src/services/medicaments'
import { Medicament } from 'src/types/apps/medicament';

type State = {
  medicaments: Array<Medicament>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined | { [key: string]: string[] }
}

const initialState: State = {
  medicaments: [],
  status: 'idle',
  error: null
}

// Thunk
export const getSimilarByDenomination = createAsyncThunk('medicaments/similar/getByDenomination', async (nom:string,{ rejectWithValue }) => {
    try {
      const response = await MedicamentService.getSimilarMedicamentsByDenomination(nom)
      
      return response
    } catch (err: any) {
      if (!err.response) {
        throw err
      }
  
      return rejectWithValue(err.response.data)
    }
  })
  
  // Slice
  const getSimilarByDenominationSlice = createSlice({
    name: 'medicaments/similar/getByDenomination',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(getSimilarByDenomination.pending, state => {
          console.log('hereeee loqding');
          
          state.status = 'loading'
        })
        builder.addCase(getSimilarByDenomination.fulfilled, (state, action) => {
          

          state.status = 'succeeded'
          
          state.medicaments = action.payload
        })
        builder.addCase(getSimilarByDenomination.rejected, (state, action) => {
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
  
  export default getSimilarByDenominationSlice.reducer

