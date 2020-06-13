
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


export default class App extends Component {

    onPressButton()
    {
        alert('You tapped the button!')
    }


render() {
    return(
        <View style={styles.container}>
            <View style={styles.bcg}>
                <Text style={styles.ws}>
                    PROFILE
                </Text>

                <View style={styles.card}>
                    <Image source={require('D:/ReactNative/X1/images/ava.jpeg')} style={styles.img} />
                    <TouchableOpacity onPress={this.onPressButton} >
                        <Image source={require('D:/ReactNative/X1/images/edit.png')} style={styles.edit} />
                    </TouchableOpacity>
                    <Text style={styles.ts}>
                        John Doe
                    </Text>
                    <Text style={styles.usr}>
                        @johndoe123
                    </Text>
                </View>
            
                <View style={styles.bcg2}>
                    
                    <View style={styles.bcg2}>
                    <TouchableOpacity onPress={this.onPressButton}>
                        <Text style={styles.butn}>
                            Dashboard
                        </Text> 
                        <Text style={styles.butn}>
                            Payment History
                        </Text>
                        <Text style={styles.butn}>
                            Statisitics
                        </Text>
                        <Text style={styles.butn}>
                            Reward
                        </Text>
                        <Text style={styles.butn}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                    </View>
                    {/* <View style={styles.bcg2}>
                        <TouchableOpacity onPress={this.onPressButton}>
                            <Text style={styles.butn}>
                              Payment History
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bcg2}>
                        <TouchableOpacity onPress={this.onPressButton}>
                            <Text style={styles.butn}>
                              Statistics
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bcg2}>
                        <TouchableOpacity onPress={this.onPressButton}>
                            <Text style={styles.butn}>
                              Reward
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bcg2}>
                        <TouchableOpacity onPress={this.onPressButton}>
                            <Text style={styles.butn}>
                              Logout
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                    
                </View>
            </View>
            

            
            
        </View>
    );
}



}
    

const styles = StyleSheet.create({
  container: {
        flex:1,
        zIndex:1,
    },

  bcg: {
      flex:1,
      backgroundColor: '#3275f5',
      justifyContent: 'center',
      zIndex:1,
      

  },

  bcg2: {
      flex:2,      
      
      backgroundColor: '#f5f6fa',
      justifyContent: 'center',
      textAlign: 'left',
      zIndex:1,
      justifyContent: 'space-around',
      
  },

  ts: {
      color: 'black',
      justifyContent: 'center',
      fontSize: 28,
      alignSelf: 'center',
      fontWeight: 'bold',

  },
  ws: {
      color: 'white',
      fontSize:20,
      alignSelf: 'center',
      justifyContent: 'center',
      fontFamily: "sans-serif-condensed",
      top:40,
      letterSpacing:2,
      
  },

  card: { 
      flex:1,
      height:170,
      width:370,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
      borderWidth:8,
      borderBottomColor: 'transparent',
      borderColor: 'transparent',
      elevation: 10,
      alignSelf:'center',
      zIndex:2,
      top:60,
      
      
      },
    img: {
      height:100,
      width:100,
      alignSelf: 'center',
      borderRadius:50,
      borderWidth:5,
      borderColor: '#c8cdd1',
      top:15,
    },
    usr: {
      alignSelf:'center',
      fontWeight: 'bold',
      color: '#8395a7',
      fontSize: 14,
    },
    
    butn: {
        top:30,
        fontSize:24,
        fontWeight:'bold',
        fontFamily: "sans-serif-condensed",
        letterSpacing:3,
        borderWidth:15,
        borderColor: 'transparent',   
    },

    edit: {
        alignSelf: 'flex-end',
        height:20,
        width:20,
        right:15,
        bottom:100,
        
    },
})
