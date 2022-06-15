import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Bus from '../assets/images/MainIcons/bus.png'
import Ticket from '../assets/images/MainIcons/ticket.png'
import BusRealtime from '../assets/images/MainIcons/busRealtime.png'
import Warnings from '../assets/images/MainIcons/warnings.png'
import Location from '../assets/images/MainIcons/location.png'
import Metro from '../assets/images/MainIcons/metro.png'

const sources = {
    bus: Bus,
    ticket: Ticket,
    realTime: BusRealtime,
    warnings: Warnings,
    location: Location,
    metro: Metro
};


const _Image = ({ source }) => {
    return <Image source={source} style={styles.circle} />;
};


const MainIcon = ({ type }) => {
    if (!type) {
        type = "bus";
    }
    return (
        <View>
            <_Image source={sources[type]} />
        </View>

    );
};


const styles = StyleSheet.create({
    icon: {
        padding: 40,
        width: 300,
        height: 600,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    circle: {
        width: 80,
        height: 80,
    }
});

export default MainIcon;
