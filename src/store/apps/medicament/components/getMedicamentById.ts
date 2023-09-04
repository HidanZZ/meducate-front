import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedicamentService from 'src/services/medicaments'
import { Medicament } from 'src/types/apps/medicament'

type State = {
    medicament: Medicament | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null | undefined | { [key: string]: string[] }
}
const initialState: State = {
    medicament: null,
    status: 'idle',
    error: null
}

export const getMedicamentById = createAsyncThunk(
    'medicaments/getById',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await MedicamentService.getMedicamentById(id)
            
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
const getMedicamentByIdSlice = createSlice({
    name: 'medicaments/getById',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(getMedicamentById.pending, state => {
                state.status = 'loading'
            })
            .addCase(getMedicamentById.fulfilled, (state, action) => {
                state.status = 'succeeded'

                state.medicament = action.payload
            })
            .addCase(getMedicamentById.rejected, (state, action) => {
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

export const { reset } = getMedicamentByIdSlice.actions

export default getMedicamentByIdSlice.reducer
