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
                        First Name :
                        <Text style={styles.ws}>
                            John
                        </Text>
                    </Text>
                    
                    <Text style={styles.ts}>
                        Last Name:
                        <Text style={styles.ws}>
                            Doe
                        </Text>
                    </Text>
                    <Text style={styles.ts}>
                        Age:
                        <Text style={styles.ws}>
                            85
                        </Text>
                    </Text>
                    <Text style={styles.ts}>
                        Gender:
                        <Text style={styles.ws}>
                            Male
                        </Text>
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
  
    ts: {
        color: 'black',
        justifyContent: 'flex-start',
        fontSize: 28,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        padding: 15,
    },
    ws: {
        color: 'black',
        justifyContent: 'flex-start',
        fontSize: 25,
        alignSelf: 'flex-start',
        paddingLeft: 15,
        fontWeight: 'normal',
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
        borderColor: 'transparent',
        elevation: 10,
        alignSelf:'center',
        zIndex:2,
        
        },
      
      
  
})