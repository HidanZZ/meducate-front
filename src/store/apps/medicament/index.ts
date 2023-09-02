import { combineReducers } from '@reduxjs/toolkit'
import getAllMedicaments from './components/getAllMedicaments'
import getByDenomination from './components/getMedicamentByDenomination'
import getByMolecule from './components/getMedicamentByMolecule'
import getSimilarByDenomination from './components/getSimilarMedicamentsByDenomination'
import getMedicamentById from './components/getMedicamentById'
import search from './components/search'


export default combineReducers({
    getAllMedicaments,
    getByDenomination,
    getByMolecule,
    getSimilarByDenomination,
    getMedicamentById,
    search
})
