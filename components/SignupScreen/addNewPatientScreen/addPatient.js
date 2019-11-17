import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import HeaderComp from '../../patientslist/header/header'
import { addpatient, getPatients } from '../../../store/actions/dataActions'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/authActions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class addPatient extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            dateOfArrival: '',
            disease: '',

        }
    }
    render() {
        console.log(this.state)
        return (

            <View style={{ backgroundColor: "white", flex: 1 }}>
                <HeaderComp />
                <KeyboardAwareScrollView>
                    <View style={styles.inputView}>
                        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", color: "green" }}>Add New Patient</Text>

                        <TextInput placeholder="Enter Patient Name" style={styles.inputs} onChangeText={(name) => { this.setState({ name }) }}></TextInput>

                        <TextInput placeholder="Enter Patient's Date Of Appointment" style={styles.inputs} onChangeText={(dateOfArrival) => { this.setState({ dateOfArrival }) }}></TextInput>
                        <TextInput placeholder="Enter Patient's Disease" style={styles.inputs} onChangeText={(disease) => { this.setState({ disease }) }}></TextInput>
                        <TouchableOpacity style={styles.buttons} onPress={() => {
                            this.props.addpatient({
                                name: this.state.name,
                                dateOfArrival: this.state.dateOfArrival,
                                disease: this.state.disease,
                                doctorid: this.props.auth.auth.doctor._id
                            })

                        }

                        }>
                            <Text style={styles.buttontext}>Add Patient</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    inputs: {
        backgroundColor: "#ccd9ff",
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        padding: 5,
        paddingLeft: 20


    },
    inputView: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 100,
        lineHeight: 20,


    },
    buttons: {
        backgroundColor: "#007f00",
        width: 180,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20

    },
    buttontext: {
        color: "white",
        fontSize: 15,
    }

})

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addpatient: (data) => (dispatch(addpatient(data))),
        logOut: () => dispatch(logOut())


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addPatient)