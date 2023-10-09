import { combineReducers } from '@reduxjs/toolkit'
import getMedicamentByDenomination from './components/getMedicamentByDenomination'
import getMedicamentById from './components/getMedicamentById'
import getMedicamentByMolecule from './components/getMedicamentByMolecule'


export default combineReducers({
    getMedicamentByDenomination,
    getMedicamentById,
    getMedicamentByMolecule

})
