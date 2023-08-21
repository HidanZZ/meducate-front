import MedicamentService from 'src/services/medicaments'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Medicament } from 'src/types/apps/medicament';

 type State = {
  searchType: 'molecule' | 'name';
  medicaments: Array<Medicament>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined | { [key: string]: string[] };
};


const initialState: State = {
  searchType: 'name', // Set your initial value here
  medicaments: [],
  status: 'idle',
  error: null
};

export const search = createAsyncThunk(
  'medicaments/searchType',
  async ({ nom, searchType }: { nom: string; searchType: 'molecule' | 'name' }, { rejectWithValue }) => {
    try {
      switch (searchType) {
        case 'molecule':
          return await MedicamentService.getMedicamentByMolecule(nom);
        default:
          return await MedicamentService.getMedicamentByDenomination(nom);
      }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);



const searchSlice = createSlice({
    name: 'medicaments/searchType',
    initialState,
    reducers: {
      reset: () => initialState,
      setSearchType: (state, action) => {
        state.searchType = action.payload;
      },
    },
    extraReducers: builder => {
      builder.addCase(search.pending, state => {
          state.status = 'loading'
        })
      builder.addCase(search.fulfilled, (state, action) => {
          state.status = 'succeeded'
  
          state.medicaments = action.payload
        })
      builder.addCase(search.rejected, (state, action) => {
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

export const { setSearchType , reset} = searchSlice.actions;

export default searchSlice.reducer;
