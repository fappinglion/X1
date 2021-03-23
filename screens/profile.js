import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function Profile(){
    return (
        <View style={styles.container}>
            <View style={styles.bcg}>
                <View style={styles.card}>
                    <Text style={styles.ts}>
                        First Name : John
                    </Text>
                    <Text style={styles.ts}>
                        Last Name: Doe
                    </Text>
                    <Text style={styles.ts}>
                        Age: 85
                    </Text>
                    <Text style={styles.ts}>
                        Gender: Male
                    </Text>
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