import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import {logOut} from '../../../store/actions/authActions'
import {connect} from 'react-redux'
 class HeaderComp extends Component {
    render() {
        return (
            <View>
               <Header backgroundColor={"white"}
  leftComponent={<TouchableOpacity><Icon name="chevron-left" size={25} color="green" onPress={()=>{Actions.loggedIn()}}></Icon></TouchableOpacity>}

/>
            </View>
        )
    }
}
export default connect()(HeaderComp)

