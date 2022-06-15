
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import Timetable from '../components/Timetable'
import { ModelContext } from '../model'
import { getHorarisMetro } from '../api'
import Footer from '../components/Footer'


function LineTimetableScreen({ navigation }) {
  const [horaris, setHoraris] = useState([]);
  const { codiLinea } = useContext(ModelContext);

  const loadHoraris = async () => {

    const features = await getHorarisMetro(codiLinea);


    setHoraris(features);


  };

  useEffect(() => {
    loadHoraris();


  }, []);
  console.log(horaris);

  if (horaris === null || horaris.length === 0) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }

  const primerasortida = horaris[0].properties.PRIMERA_SORTIDA;
  const ultimasortida = horaris[0].properties.ULTIMA_SORTIDA;

  const primerasortidadissabte = horaris[2].properties.PRIMERA_SORTIDA;
  const ultimasortidadissabte = horaris[2].properties.PRIMERA_SORTIDA;
  const primeraSortidaaDivendres = horaris[1].properties.PRIMERA_SORTIDA;
  const ultimaSortidaaDivendres = horaris[1].properties.ULTIMA_SORTIDA;

  const ultimasortidadiumenge = horaris[3].properties.ULTIMA_SORTIDA;

  const primeraSortidaaVigilies = horaris[4].properties.PRIMERA_SORTIDA;
  const ultimaSortidaaVigilies = horaris[4].properties.ULTIMA_SORTIDA;

  return (
    <View style={styles.container}>
      <ScrollView >

        <Timetable feiners={primerasortida + ' - ' + ultimasortida} divendres={primeraSortidaaDivendres + '-' + ultimaSortidaaDivendres} dissabtesFinal={primerasortidadissabte + '-' + primerasortidadissabte} diumenges={primerasortidadissabte + ' - ' + ultimasortidadiumenge} vigilies={primeraSortidaaVigilies + ' - ' + ultimaSortidaaVigilies} />


        <Footer colorText='#009688' colorBack='transparent' text='JAL Inc. TMB App' size={14} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default LineTimetableScreen;