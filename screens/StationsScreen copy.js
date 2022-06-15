
import { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { getEstacionsMetro, } from '../api.js'
import LineButtons from '../components/LineButtons'
import LineTitle from '../components/LineTitle'
import StationEndStop from '../components/StationEndStop'
import StationFirstStop from '../components/StationFirstStop'
import StationMiddleStop from '../components/StationMiddleStop'
import { ModelContext } from '../model'

function StationsScreen() {

  const [estacionsMetro, setEstacionsMetro] = useState([]);

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

  useEffect(() => {
    loadEstacionsMetro();
  }, []);



  if (estacionsMetro === null) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }
  const length = estacionsMetro.length;
  const stationName = estacionsMetro[0].properties.NOM_LINIA;
  const firstStation = estacionsMetro[0].properties.NOM_OPERADOR == "Metro" ? estacionsMetro[0].properties.ORIGEN_SERVEI : estacionsMetro[0].properties.ORIGEN_LINIA;
  const lastStation = estacionsMetro[0].properties.NOM_OPERADOR == "Metro" ? estacionsMetro[0].properties.DESTI_SERVEI : estacionsMetro[0].properties.DESTI_LINIA;


  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{ alignSelf: 'stretch' }}>
          <LineTitle line={stationName} principi={firstStation} final={lastStation} />
          <LineButtons />

          {estacionsMetro.map((estacio, index) =>
            index == 0 ?
              <StationFirstStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={false} key={estacio.properties.ID_ESTACIO_LINEA} /> :
              index == 1 & length > 2 ?
                <StationMiddleStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={false} key={estacio.properties.ID_ESTACIO_LINEA} /> :
                index !== length - 1 ?
                  <StationMiddleStop color="red" parada={estacio.properties.NOM_ESTACIO} separador={true} key={estacio.properties.ID_ESTACIO_LINEA} /> :
                  <StationEndStop color="red" parada={estacio.properties.NOM_ESTACIO} key={estacio.properties.ID_ESTACIO_LINEA} />)}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch'
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

export default StationsScreen;