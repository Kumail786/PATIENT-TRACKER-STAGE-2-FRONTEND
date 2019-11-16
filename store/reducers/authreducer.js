import ActionsTypes from '../actions/ActionsTypes'
import { Actions } from 'react-native-router-flux'

const initState = {}

const authReducer = (state=initState,action)=>{
    switch(action.type){
case ActionsTypes.SIGNUP_SUCCESS:
    
    return {
        ...state,
        auth : action.payload
    }
case ActionsTypes.SIGNUP_FAILED:

return {
    ...state,
    auth : action.payload,
    authError : "SIGNUP_FAILED"
}

 case ActionsTypes.SIGNIN_SUCCESS :
     
     
     return {
         ...state,
         auth : action.payload
     }
     case ActionsTypes.SIGNIN_FAILED: 
     
     return{
         ...state,
         auth : action.payload,
         authError : "SIGNIN_FAILED"
     }
     case ActionsTypes.LOGGED_OUT:
         
         Actions.login()
         return{
             
             auth : initState
         }



    default :
    return state
    }
}

export default authReducer