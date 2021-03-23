import React, { Component } from 'react';
import Profile from "./screens/profile.js"; 




export default class App extends Component {

    onPressButton()
    {
        alert('You tapped the button!')
    }


render() {
    return(
        <Profile />
    );
}


}
    
