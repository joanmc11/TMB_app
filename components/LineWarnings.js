import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Warning from './svg/Warning';



const LineWarnings = ({ data, data2, informacio }) => {
    return (
        <View style={{ alignSelf: 'stretch'}}>
            <View style={[styles.boxBehaind, { backgroundColor: 'white' }]}>
                <View style={[styles.boxFront, { backgroundColor: '#B2DFDB' }]}>
                <View style={{paddingLeft:24,flexDirection:'row'}}>
                    <Warning style={styles.logo} />
                    <View >
                        <Text style={styles.alerta}>Alerta de servei </Text>
                        <Text style={styles.datatext}>{data} {data2}</Text>
                    </View>
                </View>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.info}>{informacio}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxBehaind: {


        height: 61,

    },
    boxFront: {
        paddingLeft: 10,

        height: 61,
        borderBottomLeftRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    logo: {
        width: 24.47,
        height: 22.75,
        marginRight: 10,
        alignSelf: 'center',
       


    },

    info: {
        color: '#BDBDBD',
        fontSize: 14,
        fontFamily: 'Roboto',
        marginLeft: 27,
    },
    details: {
        backgroundColor: 'white',
        height: 81,
    
        justifyContent: 'center',
        
        
    },
    alerta: {
        fontWeight:'bold',
        color: '#00796B',
        fontFamily: 'Roboto'
    },
    datatext: {
        fontWeight:'bold',
        color: '#009688',
        fontSize: 14,
        fontFamily: 'Roboto'

    }

});

export default LineWarnings