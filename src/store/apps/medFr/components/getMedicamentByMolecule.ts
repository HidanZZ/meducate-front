import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MedFrService from 'src/services/medFr'
import { MedFr } from 'src/types/apps/medFr'

type State = {
    medFrMol: MedFr | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null | undefined | { [key: string]: string[] }
}
const initialState: State = {
    medFrMol: null,
    status: 'idle',
    error: null
}

export const getByMolecule = createAsyncThunk(
    'medFr/getByMolecule',
    async (molecule: string, { rejectWithValue }) => {
        try {
            const response = await MedFrService.getMedicamentByMolecule(molecule)

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
const getMedicamentByMoleculeSlice = createSlice({
    name: 'medFr/getByMolecule',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: builder => {

        builder.addCase(getByMolecule.pending, state => {
            state.status = 'loading'
        })
        builder.addCase(getByMolecule.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.medFrMol = action.payload

        })
        builder.addCase(getByMolecule.rejected, (state, action) => {
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

export const { reset } = getMedicamentByMoleculeSlice.actions

export default getMedicamentByMoleculeSlice.reducer
