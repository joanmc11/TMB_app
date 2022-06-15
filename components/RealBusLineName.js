import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const RealBusLineName = ({color, linea, start, end, time, separador}) => {
    return (
        <View style={{ alignSelf: 'stretch', backgroundColor: '#B2DFDB'}} >
        {separador? <View style={styles.separator}></View>:null}
                <View style={[styles.box]}>
                    <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.circle, {backgroundColor: color}]}>
                      
                            <Text style={styles.linea}>{linea}</Text>
                        </View>
                        <Text style={[styles.stationtext]}>{start}: {end}</Text>
                    </View>
                    <Text style={[styles.timetext, { color: time== "imminent" ? '#FF5252':'#00796B'}]}>{time}</Text>
                </View>
            </View>
       
    )
}

const styles = StyleSheet.create({

    box: {
        paddingLeft: 10,
        height: 61,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B2DFDB' 

    },
    circle: {
        width: 48,
        height: 28,
        marginRight: 10,
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center'

    },
    linea:{
        color: 'white',
        fontFamily: 'Roboto'
    },
    timetext:{
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: 282,
        fontFamily: 'Roboto'

    },
    stationtext: {
        color: '#00796B',
        position: 'absolute',
        marginLeft: 98,
        fontSize: 12,
        fontFamily: 'Roboto'
    },

    separator: {
        height:1,
        backgroundColor: 'white',
        marginLeft: 60,
        marginRight: 60,
       
    },
  

});

export default RealBusLineName 