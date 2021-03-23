import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Dashboard from "./screens/dashboard.js";
import Profile from "./screens/profile.js"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component {

    onPressButton()
    {
        alert('You tapped the button!')
    }


    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator> 
            </NavigationContainer>
            
        );
    }

}
    
