/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Login from './components/Login Screen/login'
import Signup from './components/SignupScreen/signup'
import {Router,Scene} from 'react-native-router-flux'

import React from 'react';
import {
  
  View,
  
} from 'react-native';
import startingPage from './components/firstScreen/firstScreen';
import LoggedInScreen from './components/loggedInScreen/loggedInScreen';
import Patientlist from './components/patientslist/patientlist';
import addPatient from './components/SignupScreen/addNewPatientScreen/addPatient';
import patientHistory from './components/PatientsHistoryScreens/patientHistory'
import addRecord from './components/AddNewRecord/addRecord';


const App = () => {
  return (
    <Router>
    <Scene key="root">
      <Scene key="signup"
        component={Signup}
       
        hideNavBar
        hideTabBar
      />
      <Scene
        key="login"
        component={Login}
        hideTabBar
        hideNavBar
       
        
      />
      <Scene
    key="start"
    component = {startingPage}
    hideTabBar
    hideNavBar
    initial
    
    />
     <Scene
    key="addrecord"
    component = {addRecord}
    hideTabBar
    hideNavBar
    
    
    />
     <Scene
    key="loggedIn"
    component = {LoggedInScreen}
    hideTabBar
    hideNavBar
    
    />
     <Scene
    key="patientsList"
    component = {Patientlist}
    hideTabBar
    hideNavBar
    
  
  
    />

<Scene
    key="addpatient"
    component = {addPatient}
    hideTabBar
    hideNavBar
    
  
  
    />
    <Scene
    key="history"
    component = {patientHistory}
    hideTabBar
    hideNavBar
    
    
  
  
    />
    </Scene>
    
  </Router>
  );
};

export default App;
