import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Back from '../assets/images/SecondaryIcons/back.png'
import BackButton from './svg/BackButton'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <BackButton/>
      <Text style={styles.text}>{title}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:102,
        alignSelf:'stretch',
        backgroundColor:'#009688',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:25
    },
    text:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'bold',
        paddingLeft:25
    }
  
  
  });


export default Header