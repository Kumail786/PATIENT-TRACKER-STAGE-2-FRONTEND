import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, ImageBackground,TextInput, SafeAreaView } from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import {logOut, idGetter} from '../../store/actions/authActions'
import { Actions } from 'react-native-router-flux';
;
class PatientHistory extends Component {
    
   constructor(){
       super()
this.state={
    keyword : ''
}
       
   }
   
  
    render() {
      
        const history = this.props.history.patient.history
        this.props.idGetter(this.props.history.patient._id)

        return (
            
            <View style={{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"white",flex:1}}>
               <Header backgroundColor={"white"}
  leftComponent={<TouchableOpacity><Icon name="chevron-left" size={25} color="green" onPress={()=>{Actions.loggedIn()}}></Icon></TouchableOpacity>}
 centerComponent={<View style={{width:"130%",borderRadius:20,borderRightWidth:2,borderTopWidth:2,borderLeftWidth:2,borderBottomWidth:2,paddingTop:10}}>
     <TextInput placeholder="Search History By CheckUp Date" style={{textAlign:"center"}} onChangeText={(keyword)=>{this.setState({keyword})}}></TextInput>
 </View>}
    rightComponent={<Icon name="sign-out" size={25} color="red" onPress={()=>{
        Actions.login()
        }}></Icon>}
/>
<SafeAreaView>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{marginBottom:100}}>
    <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",padding:10,color:"green"}}>History Of Patient</Text>
{history && history.filter(items=>(items.checkupDate).toLowerCase().includes(this.state.keyword)).map(data=>{
   
return(
    <TouchableOpacity key={data._id}>
    <View style={{width:"95%",backgroundColor:"white",marginLeft:"auto",marginRight:"auto",marginTop:20,padding:20,borderLeftWidth:2,borderRightWidth:2,borderBottomWidth:2,borderTopWidth:2,borderRadius:20}}>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Check Up Date : {data.checkupDate}</Text>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Medicine Suggested: {data.medicineSuggested}</Text>
<Text style={{lineHeight:30,fontWeight:"bold",fontSize:18}}>Cost :  {data.cost}</Text>
    
</View>
</TouchableOpacity>
)
}
)}

<TouchableOpacity style={{alignItems:"center",width:"60%",marginLeft:"auto",marginRight:"auto",backgroundColor:"green",padding:20,marginTop:20,borderRadius:20}} onPress={()=>{Actions.addrecord()}}>
    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Add New Record</Text></TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>



            </View>
           
        )
        
    }
}
const mapStateToProps = (state)=>{
    return{
        history : state.dataReducer.history,
        auth : state.authReducer
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      logOut : ()=>dispatch(logOut()),
      idGetter : (id)=>dispatch(idGetter(id))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PatientHistory)
