import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RealBusTitle = ({ titol, time }) => {
    return (
        
            <View style={styles.boxBehaind}>
                <View style={styles.boxFront}>
                    
                        <Text style={styles.info}>{titol}</Text>
                        <Text style={styles.timetext}>{time}</Text>

                    

                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    boxBehaind: {
        height: 61,
        backgroundColor: '#B2DFDB',
        alignSelf: 'stretch', 
       
    },
    boxFront: {
        paddingLeft: 10,
        height: 61,
        borderBottomLeftRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',

    },

    info: {
        fontWeight: 'bold',
        color: '#00796B',
        fontSize: 20,
        fontFamily:'Roboto'
    },
    timetext: {

        color: '#00796B',
        fontSize: 12,



    },

});

export default RealBusTitle 