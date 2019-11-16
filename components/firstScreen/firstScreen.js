import React,{Component} from 'react'
import { 
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    


} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../images/frontdoc.png'
import Loading from '../../images/logo.jpg'
import Background from '../../images/wallpaper.jpg'
import { Actions } from 'react-native-router-flux'


export default class startingPage extends Component{
    constructor(){
        super()
        this.state={
            loading : true
        }
    }
        render(){
            setTimeout(()=>{
                this.setState({
                    loading : false
                })
            },2000)
            if(this.state.loading === true){
                return(
                    <View style={styles.logoView}><Image source={Loading} style={styles.logoimg}></Image></View>
                )
                
            }
        return(
            <ImageBackground source={Background} style={{width:"100%",height:"100%"}}>
            <View style={styles.mainView}>
            
        
   
              
                
                
                <View > 
                    <Image source={Logo} style={styles.logo}></Image>
                    <View style={styles.desc}>
                    <Text style={styles.descText}>Welcome Doctor{"\n"}Get Started To KAMI's Patient Tracking App.</Text>
                    </View>
                    <View style={styles.buttons}>
                       
                    <TouchableOpacity onPress={()=>{Actions.signup()}}>
                        <Text style={styles.buttonText}>Lets Go...</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>

                
                
                
            </View>
            </ImageBackground>
           
        )
        
        }

        
}
const styles = StyleSheet.create({
            logo : {
                width:340,height:"65%" ,marginRight:"auto",marginLeft:20,
            },
            buttons : {
               
                backgroundColor:"white",
        width : 200,
        height : 50,
        marginLeft : "auto",
        marginRight : "auto",
        marginTop : 20,
        justifyContent : "center",
        alignItems : 'center',
        borderRadius : 20

                
            },
            mainView:{
flex : 1,
alignItems : "center",
justifyContent : "center",


            },
            desc : {
paddingTop:20,
width:"90%",
marginLeft:"auto",
marginRight:"auto"

            },
            descText : {
paddingLeft:10,
paddingRight : 10,
lineHeight : 35,
fontSize : 23,
textAlign : "center",
color : "white",
fontWeight: "bold"

            },
            buttonText:{
                fontSize:25,
                color : "green",
                fontWeight:"bold"

            },
            logoView : {
                flex : 1,
                justifyContent : "center",
                alignItems  :"center"

            }
})

