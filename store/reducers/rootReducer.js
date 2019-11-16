import {combineReducers} from 'redux'
import authReducer from '../reducers/authreducer'
import {ActionConst} from 'react-native-router-flux'
import dataReducer from '../reducers/dataReducer'


const rootReducer = combineReducers({
 authReducer,
 dataReducer,

})

export default rootReducer