import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Warning from './svg/Warning';

const Warnings = ({informacio, intercalat}) => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
            <View style={[styles.boxBehaind, intercalat? {backgroundColor: '#B2DFDB'}: {backgroundColor: 'white',}]}>
                <View style={[styles.boxFront, intercalat? {backgroundColor: 'white'}: {backgroundColor: '#B2DFDB',}]}>
                    <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                        <Warning style={styles.logo}/>
                        <Text style={styles.info}>{informacio}</Text>
                    </View>
                </View>
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
        alignItems:'center',
        justifyContent: 'center',
     

    },

    info:{
        fontWeight:'bold',
        color: '#00796B',
        fontFamily: 'Roboto'
    }

});

export default Warnings 