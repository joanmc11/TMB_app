import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Billete from '../assets/images/Ticket/billete_vacio.png'

const TicketImageName = ({bitllet}) => {
  return (
    <View style={styles.box}>
        <Image source={Billete} style={styles.ticket} />
     <View style={styles.overImage}>
  <Text style={styles.text}>{bitllet}</Text>
</View>
      
    </View>
  )
}


const styles = StyleSheet.create({

    box:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 30,
    },
   
   ticket:{
       height:229/1.2,
       width:356/1.2,

   },
   text:{
       fontFamily:'Roboto',
       fontSize:30,
       fontWeight:'bold'
   },
   overImage:{
       position: 'absolute', 
       top: 0, 
       left: 0, 
       right: 60, 
       bottom: 40, 
       justifyContent: 'center', 
       alignItems: 'center'
    }
      
 
  
  });

export default TicketImageName