
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';


// onPressButton()
// {
//     alert('You tapped the button!')
// }



export default function Dashboard ({ navigation }) {
    
    return(
        <View style={styles.container}>
            <View style={styles.bcg}>

                <View style={styles.card}>
                    <Image source={require('../images/ava.jpeg')} style={styles.img} />
                    <TouchableOpacity onPress={() => Alert.alert('Button pressed')} style={styles.touch}>
                        <Image source={require('../images/edit.png')}  style={styles.edit}/>
                    </TouchableOpacity>
                    <Text style={styles.ts}>
                        JohnDoe
                    </Text>
                    <Text style={styles.usr}>
                        @johndoe
                    </Text>
                </View>
            
                <View style={styles.bcg2}>
                     <View style={styles.bcg2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../images/dashboard.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Profile
                            </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Button pressed')}>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../images/payment.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Payment History
                            </Text>
                        </View>
                    </TouchableOpacity>
                        <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../images/stats.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Statisitics
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row',  }}>
                        <Image source={require('../images/reward.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Reward
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'row',  }}>
                        <Image source={require('../images/logout.png')} style={styles.icons}/>
                            <Text style={styles.butn}>
                                Logout
                            </Text>

                        </View>
                        
                    
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
      width:350,
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
        width:80,
        alignSelf: 'flex-start',
        left:18,
        top: 17,
    },
})
