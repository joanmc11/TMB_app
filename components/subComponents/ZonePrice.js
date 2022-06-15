import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const ZonePrice = ({zone, price}) => {
  return (
    <View style={{alignSelf:"stretch", paddingVertical:10}}>
    <View style={styles.container}>
       <Text style={styles.zonesText}>{zone}</Text>
       <Text style={styles.barra}>|</Text>
       <Text style={styles.priceText}>{price}</Text>
       
    </View>
    </View>

  )
}

const styles = StyleSheet.create({
   
    container: {
      
      height: 48,
      
      backgroundColor: '#B2DFDB',
      alignItems:'center',
      justifyContent:'space-evenly',
      flexDirection:'row',
      borderRadius:31,
      
    },
    zonesText:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'bold',
        color:'#009688'
    },
    priceText:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight:'bold',
        color:'#009688'
    },
    barra:{
        fontFamily:'Roboto',
        fontSize:22,
        color:'#009688'
    }
 
  
  });

export default ZonePrice