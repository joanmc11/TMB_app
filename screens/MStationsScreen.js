
import { useContext, useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { getEstacionsMetro } from '../api.js'
import LineButtons from '../components/LineButtons'
import LineTitle from '../components/LineTitle'
import StationEndStop from '../components/StationEndStop'
import StationFirstStop from '../components/StationFirstStop'
import StationMiddleStop from '../components/StationMiddleStop'
import StationButtonWarnings from '../components/StationButtonWarnings.js'
import StationButtonTimetable from '../components/StationButtonTimetable.js'
import { ModelContext } from '../model'
import Footer from '../components/Footer'


function MStationsScreen({ navigation }) {

  const [estacionsMetro, setEstacionsMetro] = useState([]);
  const [incidencies, setIncidencies] = useState();
  const { codiLinea } = useContext(ModelContext);

  const loadEstacionsMetro = async () => {
    const features = await getEstacionsMetro(codiLinea);
    // copio la lista amb [...list] y la ordeno amb sort()

    const orderedList = features.sort(
      (a, b) => a.properties.ORDRE_ESTACIO - b.properties.ORDRE_ESTACIO
    );

    // actualitzo l'estado amb la nova llista ja ordenada
    setEstacionsMetro(orderedList);

  };

  const loadEstacionsMetroInverse = async () => {

    const features = await getEstacionsMetro(codiLinea);
    // copio la lista amb [...list] y la ordeno amb sort()

    const orderedList = features.sort(
      (a, b) => b.properties.ORDRE_ESTACIO - a.properties.ORDRE_ESTACIO
    );

    // actualitzo l'estado amb la nova llista ja ordenada
    setEstacionsMetro(orderedList);
  };

  useEffect(() => {
    loadEstacionsMetro();


  }, []);

  useEffect(() => {

    estacionsMetro.map((estacio, index) => estacio.properties.NOM_TIPUS_ESTAT === "Operatiu" ? null : setIncidencies(true));

  });
  const onClickWarning = () => () => {
    incidencies ? navigation.navigate('Advertències de linia') : null;

  }

  const onClickHorari = () => () => {
    navigation.navigate('Horaris Metro');

  }

  const changeLineSide = (bool) => {

    bool ? loadEstacionsMetro() : loadEstacionsMetroInverse()

  }





  if (estacionsMetro === null || estacionsMetro.length === 0) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }
  const length = estacionsMetro.length;
  const stationName = estacionsMetro[0].properties.NOM_LINIA;
  const firstStation = estacionsMetro[0].properties.ORIGEN_SERVEI;
  const lastStation = estacionsMetro[0].properties.DESTI_SERVEI;



  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{ alignSelf: 'stretch' }}>
          <LineTitle line={stationName} principi={firstStation} final={lastStation} />
          <LineButtons onChange={(bool) => changeLineSide(bool)} origen={firstStation} desti={lastStation} />
          <Pressable onPress={onClickWarning()}><StationButtonWarnings incidencies={incidencies} /></Pressable>
          <Pressable onPress={onClickHorari()}><StationButtonTimetable /></Pressable>


          {estacionsMetro.map((estacio, index) =>

            index == 0 ?
              <StationFirstStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={false} key={estacio.properties.ID_ESTACIO} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} /> :
              index == 1 & length > 2 ?
                <StationMiddleStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={false} key={estacio.properties.ID_ESTACIO} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} /> :
                index !== length - 1 ?
                  <StationMiddleStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={true} key={estacio.properties.ID_ESTACIO} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} /> :
                  <StationEndStop color="red" parada={estacio.properties.NOM_ESTACIO} key={estacio.properties.ID_ESTACIO} accessible={estacio.properties.NOM_TIPUS_ACCESSIBILITAT === "Accessible" ? true : false} />)}

        </View>
        <Footer colorText='#009688' colorBack='white' text='JAL Inc. TMB App' size={14} />
      </ScrollView>
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

export default MStationsScreen;