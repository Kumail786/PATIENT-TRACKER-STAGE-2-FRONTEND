import ActionTypes from "../actions/ActionsTypes"


const initstate = []

const dataReducer = (state = initstate, action) => {
    switch (action.type) {
        case ActionTypes.GET_PATIENTS:
            console.log(action.payload)
            return {
                ...state,
                patients: action.payload
            }
        case ActionTypes.ADD_PATIENT:
            console.log(action.payload)
            return {
                ...state,
                newpatient: action.payload
            }
        case ActionTypes.GET_HISTORY:
            console.log(action.payload)
            return {
                ...state,
                history: action.payload
            }
        case ActionTypes.ADD_RECORD:
            console.log(action.payload)
            return {
                ...state,
                newdata: action.payload
            }
        case ActionTypes.ID:
            console.log(action.payload)
            return {
                ...state,
                id: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default dataReducer