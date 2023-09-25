import { combineReducers } from '@reduxjs/toolkit'
import getMedicamentByDenomination from './components/getMedicamentByDenomination'
import getMedicamentById from './components/getMedicamentById'


export default combineReducers({
    
    getMedicamentByDenomination,
    getMedicamentById

})
