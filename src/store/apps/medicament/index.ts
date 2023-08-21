import { combineReducers } from '@reduxjs/toolkit'
import getAllMedicaments from './components/getAllMedicaments'
import getByDenomination from './components/getAllMedicaments'
import getByMolecule from './components/getAllMedicaments'
import getSimilarByDenomination from './components/getAllMedicaments'
import search from './components/search'


export default combineReducers({
    getAllMedicaments,
    getByDenomination,
    getByMolecule,
    getSimilarByDenomination,
    search
})
