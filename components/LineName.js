import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SenseServei from "./subComponents/SenseServei";
import { useContext, useEffect, useState } from 'react';
import { getEstacionsMetro} from '../api.js'

const LineName = ({ color, linea, start, end, codiLinia, intercalat }) => {
  const [incidencies, setIncidencies] = useState(false);
  const [estacionsMetro, setEstacionsMetro] = useState([]);

  const loadEstacionsMetro = async () => {
    const features = await getEstacionsMetro(codiLinia);
    setEstacionsMetro(features);
   /* for (const i=0; i++; i>=features.length){
        features[i].properties.NOM_TIPUS_ESTAT === "Operatiu" ? null : setIncidencies(true);
       
    }*/
   
  };


  useEffect(() => {
    loadEstacionsMetro();
  }, []);

  useEffect(() => {
    estacionsMetro.map((estacio, index) => estacio.properties.NOM_TIPUS_ESTAT === "Operatiu" ? null : setIncidencies(true));
  },);


  
if(estacionsMetro===null){
    return <Text>Loading...</Text>
}

  return (
    <View style={{ alignSelf: "stretch" }}>
      <View
        style={[
          styles.boxBehaind,
          intercalat
            ? { backgroundColor: "#B2DFDB" }
            : { backgroundColor: "white" },
        ]}
      >
        <View
          style={[
            styles.boxFront,
            intercalat
              ? { backgroundColor: "white" }
              : { backgroundColor: "#B2DFDB" },
          ]}
        >
          <View
            style={{
              paddingLeft: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.circle, { backgroundColor: "#" + color }]}>
              <Text style={styles.linea}>{linea}</Text>
            </View>

            <Text style={styles.text}>
              {start} - {end}
            </Text>
          </View>
          <SenseServei incidencies={incidencies} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxBehaind: {
    height: 61,
  },
  boxFront: {
    paddingLeft: 10,

    height: 61,
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  circle: {
    width: 38,
    height: 38,
    marginRight: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  linea: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
  },
  text: {
    fontFamily: "Roboto",
  },
});

export default LineName;
