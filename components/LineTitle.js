import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LineTitle = ({line, principi, final}) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        {line.length <= 3 ? <Text style={styles.line}>{line}</Text> : <Text style={styles.line2}>{line}</Text>}
        </View>
      <Text style={styles.title}>{principi} - {final}</Text>
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
    square:{
        height:52,
        width: 49.5,
        borderWidth:4,
        borderColor: '#009688',
        marginLeft: 25,
        justifyContent:'center',
        alignItems:'center'

    },
    line:{
        fontSize:18,
        fontWeight:'bold',
        color:'#009688',
        fontFamily: 'Roboto'
    },
    line2:{
      fontSize:14,
      fontWeight:'bold',
      color:'#009688',
      fontFamily: 'Roboto'
  },
    title:{
        color:'#009688',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'Roboto'
    }
  });

export default LineTitle