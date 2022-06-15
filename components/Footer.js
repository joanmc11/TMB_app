import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



const Footer = ({colorText, colorBack, text, size}) => {
  return (
    <View style={[styles.container, {backgroundColor: colorBack}]}>
      <Text style={[styles.text, {color: colorText,  fontSize: size,}]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        alignSelf:'stretch',
        backgroundColor:'#009688',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        color:'white',
        fontFamily:'Roboto',
       
        fontWeight:'bold',
      
    }
  
  
  });


export default Footer