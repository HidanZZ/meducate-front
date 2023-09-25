import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedFrService from 'src/services/medFr'
import { MedFr } from 'src/types/apps/medFr'

type State = {
    medFr: MedFr | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null | undefined | { [key: string]: string[] }
}
const initialState: State = {
    medFr: null,
    status: 'idle',
    error: null
}

export const getByDenomination = createAsyncThunk(
    'medFr/getByDenomination',
    async (nomDuMedicament: string, { rejectWithValue }) => {
        try {
            const response = await MedFrService.getMedicamentByDenomination(nomDuMedicament)
            
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
const getMedicamentByDenominationSlice = createSlice({
    name: 'medFr/getByDenomination',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: builder => {

        builder.addCase(getByDenomination.pending, state => {
            state.status = 'loading'
        })
        builder.addCase(getByDenomination.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.medFr = action.payload
        })
        builder.addCase(getByDenomination.rejected, (state, action) => {
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

export const { reset } = getMedicamentByDenominationSlice.actions

export default getMedicamentByDenominationSlice.reducer
