import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Timetable = ({feiners, divendres, dissabtesFinal="Sense servei", diumenges="Sense servei", vigilies="Sense servei"}) => {
  return (
  <View>
  <Text style={styles.act}>Actualitzat. 2022 </Text>
    <View style={styles.container1}>
    <Text style={styles.info}>Laborables: Dilluns - Dijous / Feiners </Text>
      <View style={styles.subcontainer1}>
       <Text style={styles.time}>{feiners}</Text>
       </View>
       <View style={styles.group}><Text style={[styles.info,{alignSelf:'flex-start', marginRight:48}]}>Divendres </Text>
       <Text style={[styles.info,{alignSelf:'flex-end', marginLeft:48}]}>Dissabtes </Text></View>
        <View style={styles.group}>
        <View style={styles.subcontainer2}>
       <Text style={styles.time}>{divendres}</Text>
       </View>
       <View style={[styles.subcontainer2,{  backgroundColor: dissabtesFinal==='Sense servei'? '#FF5252':'#00796B'}]}>
       <Text style={styles.time}>{dissabtesFinal}</Text>
       </View>
       </View>
        <Text style={styles.info}>Diumenges i Festius </Text>
      <View style={[styles.subcontainer1,{  backgroundColor: diumenges==='Sense servei'? '#FF5252':'#00796B'}]}>
       <Text style={styles.time}>{diumenges}</Text>
       </View>

    </View>
     <View style={styles.container2}>
     <Text style={styles.info}>Vigilies de 1 de gener, 24 de juny, 24 i 25 de setembre </Text>
     <View style={[styles.subcontainer1,{  backgroundColor: diumenges==='Sense servei'? '#FF5252':'#00796B'}]}>
       <Text style={styles.time}>{vigilies}</Text>
       </View>

     </View>
    </View>
  )
}

const styles = StyleSheet.create({
   
    container1: {
      height: 400,
      width: 326,
      backgroundColor: '#B2DFDB',
      alignItems:'center',
      justifyContent:'flex-start',
      marginTop: 20,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
       borderBottomLeftRadius: 40,
    },

      container2: {
      height: 166,
      width: 326,
      backgroundColor: '#B2DFDB',
      alignItems:'center',
      justifyContent:'flex-start',
      marginTop: 20,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
       borderBottomLeftRadius: 40,
       marginTop: 43,
    },

    subcontainer1: {
      height: 38,
      width: 260,
      backgroundColor: '#00796B',
      alignItems:'center',
      justifyContent:'center',
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
       borderBottomLeftRadius: 40,
    },

      subcontainer2: {
    
      height: 38,
      width: 104,
      backgroundColor: '#00796B',
      alignItems:'center',
      justifyContent:'center',
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
       borderBottomLeftRadius: 40,
       margin: 25,
  
      
    },

    group: {
        flexDirection: 'row',
    },

    info: {
        color: '#00796B',
        fontWeight:'bold',
        fontSize: 14,
        marginTop: 23,
        marginBottom: 23,
      
    },

     act: {
        color: '#00796B',
        fontWeight:'bold',
        fontSize: 14,
        marginTop: 20,
        
    },
 
    time:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 14,
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
      marginLeft: 10,
      alignItems:'center',
      justifyContent: 'center',
   

  },
  });

export default Timetable