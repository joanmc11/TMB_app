import React from 'react'
import { View, TextInput, StyleSheet, Image, Button } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState, useContext } from 'react/cjs/react.development';
import SearchButton from '../assets/images/SecondaryIcons/searchButton.png'
import SearchIcon from './svg/SearchIcon';
import { ModelContext } from "../model";







const SearchBox = ({navigation}) => {
const [typing, setTyping]=useState();



const { setCodiLinia, afegeixCerca, allParades} = useContext(ModelContext);

const setCodi=(codi)=>{

setCodiLinia(codi);
   navigation.navigate('Informació Parada');

   for (var i = 0; i < allParades.length; i++) {
    
          if (allParades[i].properties.CODI_PARADA == codi) {
            console.log(allParades[i].properties.NOM_PARADA);
            afegeixCerca({ nom: allParades[i].properties.NOM_PARADA, codi: codi });
          }
        }

   
}
    return (
        <View style={styles.box}>
           <Pressable onPress={()=>setCodi(typing)} ><SearchIcon/></Pressable>
           <TextInput style={styles.text} placeholder='Introdueix codi de parada' onChangeText={userInput=>setTyping(userInput)}/>
        </View>

    );
};


const styles = StyleSheet.create({
   box: {
        paddingLeft: 10,
        width:279,
        height: 35,
        borderRadius: 45,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#B2DFDB',
        flexDirection:'row'
    },
    circle: {
        width: 16.61,
        height: 16.61,
       
    },
    text:{
        width:230,
        paddingLeft:10,
        color:'#00796B',
        fontFamily: 'Roboto'
        
    }
});

export default SearchBox;
