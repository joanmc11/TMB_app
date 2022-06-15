import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Wheelchair from './svg/Wheelchair';









const StationMiddleStop = ({ color, parada, separador, accessible }) => {
    return (
        <View style={{ alignSelf: 'stretch', backgroundColor: '#B2DFDB'}} >
            {separador? <View style={styles.separator}></View>:null}
            <View style={styles.boxFront}>
                <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={[styles.line, { backgroundColor: color }]}></View>
                        <View style={[styles.circle, { backgroundColor: color }]}>
                        </View><View style={[styles.line, { backgroundColor: color }]}></View></View>
                    <Text style={{ paddingLeft: 10, fontFamily:'Roboto' }}>{parada}</Text>
                </View>
                {accessible? <Wheelchair style={{ marginRight: 20 }}/> : null}
            </View>
        </View>

    );
};


const styles = StyleSheet.create({

    boxFront: {
        paddingLeft: 10,
        height: 61,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B2DFDB',

    },
    size: {
        width: 16.61,
        height: 16.61,
        marginRight: 20

    },
    line: {
        width: 2,
        height: 26,

    },
    circle: { height: 12, width: 12, borderRadius: 100 },
    separator: {
        height:1,
        backgroundColor: 'white',
        marginLeft: 60,
        marginRight: 60,
       
    }
});

export default StationMiddleStop;
