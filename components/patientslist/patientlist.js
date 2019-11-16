import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, ImageBackground,TextInput, SafeAreaView } from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from 'react-native-search-bar';
import Background from '../../images/pat.jpg'
import {connect} from 'react-redux'
import {getPatients} from '../../store/actions/dataActions'
import { Actions } from 'react-native-router-flux';
import { logOut } from '../../store/actions/authActions';
import {getHistory} from '../../store/actions/dataActions'
class Patientlist extends Component {
    
   constructor(){
       super()
this.state={
   keyword :''
}
       
   }
   componentWillMount(){
       this.setState({
           logout : false
       })
   }
   
  
    render() {
        const patients = this.props.patients
    console.log(patients)
    
    

        
if(this.state.logout === false){
        return (
            
            <View style={{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"white",flex:1}}>
               <Header backgroundColor={"white"}
  leftComponent={<TouchableOpacity><Icon name="chevron-left" size={25} color="green" onPress={()=>{Actions.loggedIn()}}></Icon></TouchableOpacity>}
 centerComponent={<View style={{width:"130%",borderRadius:20,borderRightWidth:2,borderTopWidth:2,borderLeftWidth:2,borderBottomWidth:2,paddingTop:10}}>
     <TextInput placeholder="Search For The Patient" style={{textAlign:"center"}} onChangeText={(keyword)=>{this.setState({keyword})}}></TextInput>
 </View>}
    rightComponent={<Icon name="sign-out" size={25} color="red" onPress={()=>{
        
    this.props.logOut()
    this.setState({
        logout : true
    })}}></Icon>}
/>
<SafeAreaView>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{marginBottom:100}}>
    <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",padding:10,color:"green"}}>Your Patients</Text>
{patients && patients.filter(items=>(items.name).toLowerCase().includes(this.state.keyword)).map(patient=>{
    const docid = this.props.auth.auth.doctor._id
   if(patient.doctorid == docid){ 
return(
    <TouchableOpacity onPress={()=>{
        if(this.props.patients){
        const id = patient._id
        this.props.getHistory(id)
    }
    }} key={patient._id}>
    <View style={{width:"95%",backgroundColor:"white",marginLeft:"auto",marginRight:"auto",marginTop:20,padding:20,borderLeftWidth:2,borderRightWidth:2,borderBottomWidth:2,borderTopWidth:2,borderRadius:20}}>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Patient Name : {patient.name}</Text>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Appointment Date: {patient.dateOfArrival}</Text>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Disease :  {patient.disease}</Text>
    
</View>
</TouchableOpacity>
)
}
})}
</View>
</ScrollView>
</SafeAreaView>



            </View>
           
        )
    }else{
        return null
    }
        
    }
}
const mapStateToProps = (state)=>{
    return{
        patients : state.dataReducer.patients.patients,
        auth : state.authReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
        logOut : ()=>dispatch(logOut()),
        getHistory : (id)=>dispatch(getHistory(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Patientlist)
