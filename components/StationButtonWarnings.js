import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Incidencies from './subComponents/Incidencies';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const StationButtonWarnings = ({incidencies}) => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
                <View style={[styles.box]}>
                    <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>                 
                         <Incidencies incidencies={incidencies}/>
                    </View>
                </View>
            </View>
      
    )
}

const styles = StyleSheet.create({

    box: {
        paddingLeft: 10,

        height: 36,
        borderBottomLeftRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     

    },

    info: {
        fontWeight:'bold',
        color: 'white',
 
    },


});

export default StationButtonWarnings