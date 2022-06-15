import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Wheelchair from './svg/Wheelchair';









const StationFirstStop = ({color, parada, accessible}) => {
    return (
        <View style={{alignSelf:'stretch'}}>
        <View style={styles.boxBehaind}>
            <View style={styles.boxFront}>
                <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{alignItems:"center"}}>
                    <View style={[styles.line, {backgroundColor:"white"}]}></View>
                        <View style={{ height: 12, width: 12, borderRadius: 100, backgroundColor: color }}>
                        </View><View style={[styles.line, {backgroundColor:color}]}></View></View>
                    <Text style={{ paddingLeft: 10, fontFamily:'Roboto'}}>{parada}</Text>
                </View>
                {accessible? <Wheelchair style={{ marginRight: 20 }}/> : null}
               
            </View>
        </View>
        </View>

    );
};


const styles = StyleSheet.create({
    boxBehaind: {

        
        height: 61,
        backgroundColor: '#B2DFDB',
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
    size: {
        width: 16.61,
        height: 16.61,
        marginRight:20

    },
    line: {
        width: 2,
        height: 26,

    }
});

export default StationFirstStop;
