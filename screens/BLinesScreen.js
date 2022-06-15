import { useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import { getLineasBus } from '../api.js'
import BusLineName from '../components/BusLineName'
import { ModelContext } from '../model'
import Footer from '../components/Footer'

function BLinesScreen({ navigation }) {

  const [features, setDatasets] = useState(null);
  const { setCodiLinia } = useContext(ModelContext);

  useEffect(() => {
    getLineasBus().then(loadedDatasets => {
      console.log(loadedDatasets)
      setDatasets(loadedDatasets);
    });
  }, []);

  const onClickLinia = (codiLinia) => () => {
    setCodiLinia(codiLinia);
    navigation.navigate('Parades de la linia');
  }


  if (features === null) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch' }}>

      <FlatList
        data={features}
        ListFooterComponent={<Footer colorText='#009688' colorBack='white' text='JAL Inc. TMB App' size={14} />}
        ListHeaderComponent={<Footer colorText='#00796B' colorBack='#B2DFDB' text='Escull una linia de bus' size={18} />}
        renderItem={({ item, index }) => (
          <Pressable onPress={onClickLinia(item.properties.CODI_LINIA)}>
            <BusLineName
              color={item.properties.COLOR_LINIA}
              linea={item.properties.NOM_LINIA}
              start={item.properties.ORIGEN_LINIA}
              end={item.properties.DESTI_LINIA}
              intercalat={index % 2 == 1}
              key={item.properties.ID_LINIA}
              bus={true} />
          </Pressable>

        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    color: '#009688',
    padding: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
  containerLoad: {
    justifyContent: 'center',
    flex: 1
  }
});



export default BLinesScreen;