import { View, Picker, StyleSheet } from 'react-native'
import React, { useState } from "react";

const TicketSelect = ({onChange}) => {
    const [selectedValue, setSelectedValue] = useState("Seleccioni Bitllet");
    const bitllets=["T-usual", "T-casual", "T-grup", "T-jove", "T-familiar", "T-dia", "T-aire"];

   const setValues= (itemValue)=>{
      onChange(itemValue);
      setSelectedValue(itemValue);
    }

  return (
   
        <View style={styles.box} >
            <View style={{marginStart:110}}>
    <Picker
      selectedValue={selectedValue}

      style={{ height: 50, width: 170, color:"#009688", fontWeight:'bold'}}
      onValueChange={(itemValue, itemIndex) => setValues(itemValue)}
    >
       
        {bitllets.map((bitllets, index)=>
        <Picker.Item label={bitllets} value={bitllets} />
        )}
     
    </Picker>
    </View>
  </View>
  
    
  )
}
const styles = StyleSheet.create({
    
    box:{
        backgroundColor:"#B2DFDB",
        height:35,
        width:280,
        borderRadius:45,
        justifyContent:'center',
        alignItems:'center',
        margin: 40,
    }
  });

export default TicketSelect