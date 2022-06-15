
import { useContext, useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import { getEstacionsBus } from '../api.js'
import LineButtons from '../components/LineButtons'
import LineTitle from '../components/LineTitle'
import StationEndStop from '../components/StationEndStop'
import StationFirstStop from '../components/StationFirstStop'
import StationMiddleStop from '../components/StationMiddleStop'
import StationButtonTimetable from '../components/StationButtonTimetable.js'
import { ModelContext } from '../model'
import Footer from '../components/Footer'


function BStationsScreen({ navigation }) {

  const [estacionsBus, setEstacionsBus] = useState([]);

  const { codiLinea } = useContext(ModelContext);

  const loadEstacionsBus = async () => {
    const features = await getEstacionsBus(codiLinea);
    // copio la lista amb [...list] y la ordeno amb sort()

    const orderedList = features.sort(
      (a, b) => a.properties.ORDRE - b.properties.ORDRE
    );

    // actualitzo l'estado amb la nova llista ja ordenada
    setEstacionsBus(orderedList);

  };

  const loadEstacionsBusInverse = async () => {

    const features = await getEstacionsBus(codiLinea);
    // copio la lista amb [...list] y la ordeno amb sort()

    const orderedList = features.sort(
      (a, b) => b.properties.ORDRE - a.properties.ORDRE
    );

    // actualitzo l'estado amb la nova llista ja ordenada
    setEstacionsBus(orderedList);
  };

  useEffect(() => {
    loadEstacionsBus();


  }, []);


  const onClickHorari = () => () => {

    navigation.navigate('Horaris Bus');
  }



  const changeLineSide = (bool) => {

    bool ? loadEstacionsBus() : loadEstacionsBusInverse()

  }



  if (estacionsBus === null || estacionsBus.length === 0) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }
  const length = estacionsBus.length;
  const stationName = estacionsBus[0].properties.NOM_LINIA;
  const firstStation = estacionsBus[0].properties.ORIGEN_SENTIT;
  const lastStation = estacionsBus[0].properties.DESTI_SENTIT;



  return (
    <View style={styles.container}>
      <ScrollView >

        <View style={{ alignSelf: 'stretch' }}>
          <LineTitle line={stationName} principi={firstStation} final={lastStation} />
          <LineButtons onChange={(bool) => changeLineSide(bool)} origen={firstStation} desti={lastStation} />

          <Pressable onPress={onClickHorari()}><StationButtonTimetable /></Pressable>



          {estacionsBus.map((estacio, index) =>

            index == 0 ?
              <StationFirstStop color="red" parada={estacio.properties.NOM_PARADA} separador={false} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={estacio.properties.ID_PARADA} /> :
              index == 1 & length > 2 ? <StationMiddleStop color="red" parada={estacio.properties.NOM_PARADA} separador={false} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={estacio.properties.ID_PARADA} /> :
                index !== length - 1 ? <StationMiddleStop color="red" parada={estacio.properties.NOM_PARADA} separador={true} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={estacio.properties.ID_PARADA} /> :
                  <StationEndStop color="red" parada={estacio.properties.NOM_PARADA} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={estacio.properties.ID_PARADA} />)}

        </View>
        <Footer colorText='#009688' colorBack='white' text='JAL Inc. TMB App' size={14} />
      </ScrollView>
      {/*} <FlatList
        data={estacionsBus}
        
        renderItem={({ item, index }) => (
          index == 0 ?
              <StationFirstStop color="red" parada={item.properties.NOM_PARADA} separador={false} accessible={item.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false}  key={item.properties.ID_LINIA}/> :
              index == 1 & length > 2 ? 
              <StationMiddleStop color="red" parada={item.properties.NOM_PARADA} separador={false} accessible={item.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={item.properties.ID_LINIA}/> :
              index !== length - 1 ? 
              <StationMiddleStop color="red" parada={item.properties.NOM_PARADA} separador={true} accessible={item.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={item.properties.ID_LINIA}/> :
              <StationEndStop color="red" parada={item.properties.NOM_PARADA} accessible={item.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} key={item.properties.ID_LINIA}/>

                   
        )}/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },


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

export default BStationsScreen;