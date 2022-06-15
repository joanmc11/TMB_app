
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import Timetable from '../components/Timetable'
import { ModelContext } from '../model'
import { getHorarisBus } from '../api'


function BLineTimetableScreen({ navigation }) {
  const [horaris, setHoraris] = useState([]);
  const { codiLinea } = useContext(ModelContext);

  const loadBHoraris = async () => {

    const features = await getHorarisBus(codiLinea);


    setHoraris(features);


  };

  useEffect(() => {
    loadBHoraris();


  }, []);


  console.log(horaris);

  if (horaris === null || horaris.length === 0) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }

  const primerasortida = horaris[0].properties.DESC_TIPUS_DIA == "Feiners" ? horaris[0].properties.PRIMERA_SORTIDA : null;
  const ultimasortida = horaris[0].properties.DESC_TIPUS_DIA == "Feiners" ? horaris[0].properties.ULTIMA_SORTIDA : null;

  const primerasortidadissabte = horaris[0].properties.DESC_TIPUS_DIA == "Dissabtes" ? horaris[0].properties.PRIMERA_SORTIDA : null;
  const ultimasortidadissabte = horaris[0].properties.DESC_TIPUS_DIA == "Dissabtes" ? horaris[0].properties.PRIMERA_SORTIDA : null;
  const primeraSortidaaDivendres = '';
  const ultimaSortidaaDivendres = '';

  const ultimasortidadiumenge = '';

  const primeraSortidaaVigilies = '';
  const ultimaSortidaaVigilies = '';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView >

        <Timetable feiners={primerasortida + ' - ' + ultimasortida} divendres={primeraSortidaaDivendres + '-' + ultimaSortidaaDivendres} dissabtesFinal={primerasortidadissabte + '-' + primerasortidadissabte} diumenges={primerasortidadissabte + ' - ' + ultimasortidadiumenge} vigilies={primeraSortidaaVigilies + ' - ' + ultimaSortidaaVigilies} />



      </ScrollView>
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

export default BLineTimetableScreen;