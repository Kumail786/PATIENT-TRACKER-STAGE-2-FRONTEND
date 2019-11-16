import React,{Component} from 'react'
import Background from '../../images/back.jpeg'
import Logo from '../../images/loggedlogo.jpeg'
import {connect} from 'react-redux'
import {getPatients} from '../../store/actions/dataActions'
import {

    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,


} from 'react-native'
import { Actions } from 'react-native-router-flux'

class LoggedInScreen extends Component{
    constructor(){
        super()
        
    }
   
    render(){
        console.log(this.props.auth)
        return(
            <ImageBackground source={Background} style={{width:"100%",height:"100%"}}>
            <View style={{flex : 1,alignItems:"center",paddingTop:20}}>
               
                <View style={{width:"70%",backgroundColor:"#B44241",flex : 0.8,justifyContent:"center",alignItems:"center",borderRadius:160,borderBottomWidth:1,borderRightWidth:1,borderTopWidth:1,borderLeftWidth:1}}>
                    <View style={{width:"70%",backgroundColor:"#ED8637",flex : 0.7,justifyContent:"center",alignItems:"center",borderRadius:100,borderBottomWidth:1,borderRightWidth:1,borderTopWidth:1,borderLeftWidth:1}}>
                        <View style={{width:"70%",height:"70%",borderRadius:100,borderBottomWidth:1,borderRightWidth:1,borderTopWidth:1,borderLeftWidth:1}}>
                            <Image source={Logo} style={{width:"100%",height:"100%",borderRadius:100}}></Image>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:50}}>
        <Text style={{fontWeight:"bold",fontSize:30,color:"white"}}>Manage Your Patients</Text>
                </View>

                <View style={{marginTop:50}}>
                    <TouchableOpacity style={{backgroundColor:"#ED8637",padding:20,borderRadius:20,marginBottom:20}} onPress={()=>{this.props.getPatients()}}>
                        <Text style={{fontSize:20,textAlign:"center",color:"white",fontWeight:"bold"}}>View Patients</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#3385ff",padding:20,borderRadius:20,marginLeft:"auto",marginRight:"auto"}}onPress={()=>{Actions.addpatient()}}>
                        <Text style={{fontSize:20,textAlign:"center",color:"white",fontWeight:"bold"}}>Add New Patient</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        auth : state.authReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getPatients : ()=>dispatch(getPatients()),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoggedInScreen)

