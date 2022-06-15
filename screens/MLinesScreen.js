import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { getLineasMetro } from "../api";
import LineName from "../components/LineName";
import { ModelContext } from "../model";
import Footer from '../components/Footer'

function MLinesScreen({ navigation }) {
  const [LiniasMetro, setLiniasMetro] = useState(null);


  const { setCodiLinia } = useContext(ModelContext);

  const loadLineasMetro = async () => {
    const features = await getLineasMetro();
    // copio la lista amb [...list] y la ordeno amb sort()

    const orderedList = features.sort(
      (a, b) => a.properties.ORDRE_LINIA - b.properties.ORDRE_LINIA
    );

    // actualitzo l'estado amb la nova llista ja ordenada
    setLiniasMetro(orderedList);
  };

  useEffect(() => {
    loadLineasMetro();
  });

  const onClickLinia = (codiLinia) => () => {
    setCodiLinia(codiLinia);
    navigation.navigate("Estacions de la linia");
  };

  if (LiniasMetro === null) {
    return <View style={{ justifyContent: 'center', flex: 1 }}><Text style={styles.loading}>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>

      {/*LiniasMetro.map((linias, index) => (
          <Pressable
            onPress={onClickLinia(linias.properties.CODI_LINIA)}
            key={linias.properties.ID_LINIA}
          >
            <LineName
              codiLinia={linias.properties.CODI_LINIA}
              key={linias.properties.ID_LINIA}
              color={linias.properties.COLOR_LINIA}
              linea={linias.properties.NOM_LINIA}
              start={linias.properties.ORIGEN_LINIA}
              end={linias.properties.DESTI_LINIA}
              intercalat={index % 2 == 1}
              bus={false}
            
            />
          </Pressable>
        ))*/}

      <FlatList
        data={LiniasMetro}
        ListFooterComponent={<Footer colorText='#009688' colorBack='white' text='JAL Inc. TMB App' size={14} />}
        ListHeaderComponent={<Footer colorText='#00796B' colorBack='#B2DFDB' text='Escull una linia de metro' size={18} />}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={onClickLinia(item.properties.CODI_LINIA)}
            key={item.properties.ID_LINIA}
          >
            <LineName
              codiLinia={item.properties.CODI_LINIA}
              key={item.properties.ID_LINIA}
              color={item.properties.COLOR_LINIA}
              linea={item.properties.NOM_LINIA}
              start={item.properties.ORIGEN_LINIA}
              end={item.properties.DESTI_LINIA}
              intercalat={index % 2 == 1}
              bus={false}

            />

          </Pressable>

        )}

      />


    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch"
  },
  loading: {
    color: '#009688',
    padding: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  }


});

export default MLinesScreen;
