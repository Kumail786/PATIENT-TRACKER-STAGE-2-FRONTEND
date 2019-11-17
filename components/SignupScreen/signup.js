import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../images/doctor1.png'
import LoginBackground from '../../images/wallpaper.jpg'
import { Actions } from 'react-native-router-flux'
import { SignUp } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {

    Image,
    TextInput,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            error: '',


        }


    }

    async UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps)
        if (nextProps.auth.authError === "SIGNUP_FAILED") {
            console.log("aya")
            return await this.setState({
                error: nextProps.auth.auth.data.message
            })

        }
    }


    render() {
        console.log(this.props.auth)

        return (
            <View style={styles.mainView}>
                <View style={styles.backView}>
                    <ImageBackground source={LoginBackground} style={styles.back}>
                        <KeyboardAwareScrollView style={{ flex: 1 }}>
                            <Image source={Logo} style={styles.logo}></Image>
                            <Text style={styles.text}>Welcome To KAMI's Patient Tracking App, Signup Now</Text>


                            <View style={styles.inputView}>
                                <TextInput placeholder="Enter Your Name" style={styles.inputs} onChangeText={(name) => { this.setState({ name }) }}></TextInput>
                                <TextInput placeholder="Enter Your Email" style={styles.inputs} onChangeText={(email) => { this.setState({ email }) }} ></TextInput>
                                <TextInput placeholder="Enter Your Password" secureTextEntry={true} style={styles.inputs} onChangeText={(password) => { this.setState({ password }) }}></TextInput>
                                <View>
                                    <Text style={styles.error}>{this.state.error}</Text>

                                    <TouchableOpacity style={styles.buttons} onPress={async () => {
                                        await this.props.SignUp(this.state)
                                        console.log("hi")


                                    }}>

                                        <Text style={styles.buttontext}>SignUp</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.buttons} onPress={() => { Actions.login() }}>
                                        <Text style={styles.buttontext}>Already Registered? Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>

                    </ImageBackground>
                </View>
            </View>
        );
    };


}
const styles = StyleSheet.create({
    mainView: {


        flex: 1,
        justifyContent: "center",



    },

    backView: {
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue"



    },
    back:
    {
        width: "100%", height: "100%"
    },
    text: {
        color: "white",
        fontSize: 20,
        fontFamily: "Helvetica",
        textAlign: "center",
        marginTop: 20,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        lineHeight: 30
    },
    inputs: {
        backgroundColor: "white",
        borderRadius: 50,
        height: 40,
        marginTop: 20,
        padding: 5,
        paddingLeft: 20


    },
    inputView: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 20,
        lineHeight: 20,

    },
    buttons: {
        backgroundColor: "#007f00",
        width: 200,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20

    },
    logo: {
        borderRadius: 100,
        width: 140,
        height: 130,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40

    },
    buttontext: {
        color: "white",
        fontSize: 15,
    },

    error: {
        color: "red",
        textAlign: "center",

    }


});

const mapStateToProps = (state) => {

    return {
        auth: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: (data) => (dispatch(SignUp(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);