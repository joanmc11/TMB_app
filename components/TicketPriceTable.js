import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ZonePrice from './subComponents/ZonePrice'

const TicketPriceTable = ({text, zona1, zona2, zona3}) => {
  return (
    <View style={{alignSelf:"stretch"}}>
       <View style={{alignSelf:"stretch", paddingHorizontal:25}}>
       <Text style={{alignSelf:'center', marginBottom:25}}>{text}</Text>
    <View style={styles.container}>
      
       <Text style={styles.zonesText}>Zones</Text>
       <View></View>
       <Text style={styles.zonesText}>Preu (€)</Text>
       
    </View>
    </View >
       <ZonePrice zone="1 Zona" price={zona1}/>
       <ZonePrice zone="2 Zones" price={zona2}/>
       <ZonePrice zone="3 Zones" price={zona3}/>
    </View>
  )
}


const styles = StyleSheet.create({
   
    container: {
      
        height: 48,        
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        borderRadius:31,
        
      },
      zonesText:{
          fontFamily:'Roboto',
          fontSize:16,
          fontWeight:'bold',
          color:'black'
      },
     
      
 
  
  });

export default TicketPriceTable