import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SenseServei = ({ incidencies }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, incidencies ? { backgroundColor: 'orange' } : { backgroundColor: '#2ce528' }]}></View>
      {incidencies ? 
      <Text style={styles.text}>Incidències</Text> : 
      <View >
        <Text style={styles.text}>Servei</Text>
        <Text style={styles.text}>Normal</Text>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10
  },

  circle: {
    width: 10,
    height: 10,
    marginRight: 10,
    borderRadius: 100,


  },
  linea: {
    fontWeight: 'bold',
    color: 'white'
  },
  text: {
    fontFamily: 'Roboto'
  }

});
export default SenseServei