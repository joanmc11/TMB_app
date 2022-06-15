import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SenseServei from './subComponents/SenseServei';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const BusLineName = ({color, linea, start, end, incidencies, intercalat, bus}) => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
            <View style={[styles.boxBehaind, intercalat? {backgroundColor: '#B2DFDB'}: {backgroundColor: 'white',}]}>
                <View style={[styles.boxFront, intercalat? {backgroundColor: 'white'}: {backgroundColor: '#B2DFDB',}]}>
                    <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                        
                        <View style={[styles.circle, {backgroundColor: '#' + color}]}>
                            <Text style={styles.linea}>{linea}</Text>
                        </View>
                            
                        <Text style={styles.text}>{start} - {end}</Text>
                    </View>
                   { bus? null:
                    <SenseServei incidencies={incidencies}/>}
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
    circle: {
        width: 48,
        height: 28,
        marginRight: 10,
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center',

    },
    linea:{
        fontWeight:'bold',
        color: 'white',
        fontFamily: 'Roboto'
    },
    text:{
        fontFamily:'Roboto'
    }

});

export default BusLineName 