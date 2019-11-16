import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'
import HeaderComp from '../patientslist/header/header'
import {addrecord} from '../../store/actions/dataActions'
import {connect} from 'react-redux'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
 class addRecord extends Component {
    constructor(){
        super()
        this.state={
            checkupDate : '',
            medicineSuggested : '',
            cost : ''
            
        }
    }
    render() {
        const id = this.props.newdata.id
        return (
            
            <View style={{backgroundColor:"white",flex:1}}>
              <HeaderComp/>  
<KeyboardAwareScrollView>
                <View style = {styles.inputView}>
                    <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",color:"green"}}>Add New Record</Text>
         
         <TextInput placeholder="Enter Check Up Date" style={styles.inputs} onChangeText={(checkupDate)=>{this.setState({checkupDate})}}></TextInput>
         
        <TextInput placeholder="Enter Medicines You Suggested" style={styles.inputs} onChangeText={(medicineSuggested)=>{this.setState({medicineSuggested})}}></TextInput>
        <TextInput placeholder="Enter Cost" style={styles.inputs} onChangeText={(cost)=>{this.setState({cost})}}></TextInput>
        <TouchableOpacity style={styles.buttons} onPress={()=>{this.props.addrecord(this.state,id)}}>
             <Text style={styles.buttontext}>Add To History</Text>
    </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
            </View>
        )
    }
    
}
 const styles = StyleSheet.create({
    inputs : {
        backgroundColor : "#ccd9ff",
        borderRadius : 10,
        height : 40,
        marginTop : 20,
        padding : 5,
        paddingLeft:20
       
        
    },
    inputView : {
        width : "80%",
        marginLeft : "auto",
        marginRight : "auto",
        marginTop:100,
        lineHeight : 20,
        
        
    },
    buttons : {
        backgroundColor : "#007f00",
        width : 180,
        height : 50,
        marginLeft : "auto",
        marginRight : "auto",
        marginTop : 20,
        justifyContent : "center",
        alignItems : 'center',
        borderRadius : 20

    },
    buttontext :{
        color : "white",
        fontSize: 15,
    }
    
 })

 const mapStateToProps =(state)=>{
     return{
         auth : state.authReducer,
         newdata : state.dataReducer,
         id : state.dataReducer.id
     }
 }

 const mapDispatchToProps = (dispatch)=>{
     return{
         
        addrecord : (data,id)=>dispatch(addrecord(data,id))
         
     }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(addRecord)