import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Timetable from '../assets/images/SecondaryIcons/clock.png'

const StationButtonTimetable = () => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
                <View style={[styles.box]}>
                    <View style={{ paddingLeft: 25, flexDirection: 'row', alignItems: 'center' }}>                 
                          <Image source={Timetable} style={styles.logo} /> 
                          <Text style={[styles.info]}>Horaris</Text>
                    </View>
                </View>
            </View>
      
    )
}

const styles = StyleSheet.create({

    box: {
        paddingLeft: 10,

        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
     

    },

    info: {
        fontWeight:'bold',
        color: '#00796B',
        marginLeft: 15,
 
    },

     logo: {
        width: 24.47,
        height: 22.75,
        marginRight: 10,
        alignItems:'center',
        justifyContent: 'center',
     

    },


});

export default StationButtonTimetable