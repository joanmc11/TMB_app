import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from "react";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';





const LineButtons = ({ origen, desti, onChange }) => {

    const [initial, setBoolean] = useState(true);
    const setInitial = () => {
        setBoolean(true);
        onChange(true);
    }
    const setFinal = () => { 
        setBoolean(false); 
        onChange(false); };


    return (
        <View style={styles.container}>
            <Pressable onPress={setInitial} style={[styles.box, { borderBottomColor: '#009688', borderBottomWidth: initial ? 2 : 0 }]}>

                <Text style={styles.title}>{origen}</Text>

            </Pressable>
            <Pressable onPress={setFinal} style={[styles.box, { borderBottomColor: '#009688', borderBottomWidth: initial ? 0 : 2 }]}>

                <Text style={styles.title}>{desti}</Text>

            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        height: 40,
        backgroundColor: '#B2DFDB',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },


    title: {
        color: '#009688',
        fontFamily: 'Roboto'


    }
});

export default LineButtons