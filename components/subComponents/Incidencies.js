import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'




const Incidencies = ({ incidencies }) => {
  return (

    <View style={styles.container}>
      <View style={[styles.circle, incidencies ? { backgroundColor: 'orange' } : { backgroundColor: '#2ce528' }]}></View>


      {incidencies ?
      <View style={styles.bgcolor1} >
      <Text style={styles.text1}>Incidencies de circulacio</Text>
      </View> :
      <View style={styles.bgcolor2} >
        <Text style={styles.text2}>Sense incidencies de circulacio</Text>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
  position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 36,
    width: 428,
   
  },

  bgcolor1: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 36,
    width: 428,
    backgroundColor: '#FFCC004D',
    marginLeft: -10,

  },

  bgcolor2: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 36,
    width: 428,


  },

  circle: {
    width: 10,
    height: 10,
    marginRight: 20,
    borderRadius: 100,
    marginLeft: 30,


  },

  text1: {
    color: '#00796B',
    fontWeight: 'bold',
    marginLeft: 80,
  },

  text2: {
    color: '#00796B',
    fontWeight: 'bold',
    marginLeft: 70,
  }

});
export default Incidencies