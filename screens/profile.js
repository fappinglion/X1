
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import navigator from '../routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Profile () {

    onPressButton()
    {
        alert('You tapped the button!')
    }

    onPressNav = () => {
        navigation.navigate('order')
    }



    return(
        <View style={styles.container}>
            <View style={styles.bcg}>
                <Text style={styles.ws}>
                    PROFILE
                </Text>

                <View style={styles.card}>
                    
                    <Image source={require('D:/ReactNative/X1/images/ava.jpeg')} style={styles.img} />
                    <TouchableOpacity onPress={this.onPressButton} style={styles.touch}>
                        <Image source={require('D:/ReactNative/X1/images/edit.png')}  style={styles.edit}/>
                    </TouchableOpacity>
                    <Text style={styles.ts}>
                        Neelesh RJha
                    </Text>
                    <Text style={styles.usr}>
                        @neelesh123
                    </Text>
                </View>
            
                <View style={styles.bcg2}>
                    
                     <View style={styles.bcg2}>
                    <TouchableOpacity onPress={this.onPressButton}>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('D:/ReactNative/X1/images/dashboard.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Dashboard
                            </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressButton}>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('D:/ReactNative/X1/images/payment.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Payment History
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('D:/ReactNative/X1/images/stats.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Statisitics
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row',  }}>
                        <Image source={require('D:/ReactNative/X1/images/reward.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Reward
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'row',  }}>
                        <Image source={require('D:/ReactNative/X1/images/logout.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Logout
                            </Text>

                        </View>
                        
                    </TouchableOpacity>
                    </View>                   
                </View>
            </View>
            

            
            
        </View>
    );
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
        fontSize:22,
        fontWeight:'bold',
        fontFamily: "sans-serif-condensed",
        letterSpacing:2,
        borderWidth:15,
        borderColor: 'transparent',   
        alignSelf:'flex-start',
        left:50,
        color:'#222f3e',
    },

    edit: {
        alignSelf: 'flex-end',
        height:20,
        width:20,
        right:10,
        
        
    },

    touch: {
        
        alignSelf: 'flex-end',
        height:20,
        width:20,
        right:15,
        bottom:100,
    },

    icons: {
        height:60,
        width:60,
        alignSelf: 'flex-start',
        left:18,
        top: 17,
    },
})
