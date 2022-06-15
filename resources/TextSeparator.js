import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextSeparator = ({title}) => {
  return (
    <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.separator} />
          <View>
            <Text style={{ width: 100, textAlign: 'center', fontWeight:'bold' }}>{title}</Text>
          </View>
          <View style={styles.separator} />
        </View>
  )
}

const styles = StyleSheet.create({
   
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: 'black'
    },
  });
  
export default TextSeparator