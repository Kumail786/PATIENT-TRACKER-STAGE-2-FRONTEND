import axios from 'axios'
import ActionTypes from './ActionsTypes'
import { Actions } from 'react-native-router-flux'


export const getPatients = ()=>{
return (dispatch)=>{
    axios.get("https://mighty-ocean-20865.herokuapp.com/doctor/patients").then(patients=>{
        dispatch({type : ActionTypes.GET_PATIENTS,payload : patients.data})
        Actions.patientsList()
    }).catch(error=>{
        console.log(error)
    })
}
}

export const addpatient = (data)=>{
    return(dispatch)=>{
        axios.post("https://mighty-ocean-20865.herokuapp.com/patients/add",data).then(res=>{
            dispatch({type : ActionTypes.ADD_PATIENT,payload : res.data})
            Actions.loggedIn()
        }).catch(error=>{
            console.log(error)
        })
    }
}



export const getHistory = (id)=>{
    return(dispatch)=>{
        axios.get(`https://mighty-ocean-20865.herokuapp.com/doctor/patients/${id}`).then(res=>{
            dispatch({type : ActionTypes.GET_HISTORY,payload : res.data})
            Actions.history()
        }).catch((error)=>{
            console.log(error)

        
    })
}
}
export const addrecord = (data,id)=>{
    return(dispatch)=>{
        axios.post(`https://mighty-ocean-20865.herokuapp.com/doctor/patients/adddata/${id}`,data).then(res=>{
            dispatch({type : ActionTypes.ADD_RECORD,payload : res.data})
            
        }).catch(error=>{
            
        })
    }
}