import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import RealBusGreen from './svg/RealBusGreen'

const BusLineTitle = ({line, principi, final, ibus=false}) => {
  return (

    <View style={styles.container}>
      <RealBusGreen style={styles.logo}/>
       
       <View>
      <Text style={styles.title}>{ibus? principi: principi +"-"+final}</Text>
     <Text style={styles.line}>Parada num {line}</Text>
     </View>
    </View>

  )
}

const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      height: 80,
      backgroundColor: '#B2DFDB',
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'row'
    },
 
    line:{
        fontSize:12,
        color:'#009688',
        fontFamily: 'Roboto'
    },
    title:{
        color:'#009688',
        fontWeight:'bold',
        fontSize: 18,
        fontFamily: 'Roboto'
    
    },
    logo: {
      width:82,
      height: 82,
      marginHorizontal:20,
      alignItems:'center',
      justifyContent: 'center',
   

  },
  });

export default BusLineTitle