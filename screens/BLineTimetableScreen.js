
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import Timetable from '../components/Timetable'
import { ModelContext } from '../model'
import { getHorarisBus } from '../api'


function BLineTimetableScreen() {
  const [horaris, setHoraris] = useState([]);
  const [feiners, setFeiners] = useState();
  const [dissabtes, setDissabtes] = useState();
  const [festius, setFestius] = useState();
  const { codiLinea } = useContext(ModelContext);

  const loadBHoraris = async () => {

    const features = await getHorarisBus(codiLinea);


    setHoraris(features);


  };



  useEffect(() => {
    loadBHoraris();


  }, []);

  useEffect(() => {

    horaris.map((horaris, index) =>
      horaris.properties.ID_SENTIT === 1 ? (
        horaris.properties.ID_TIPUS_DIA === 1 ? setFeiners(horaris.properties.PRIMERA_SORTIDA + "-" + horaris.properties.ULTIMA_SORTIDA) :
          horaris.properties.ID_TIPUS_DIA === 2 ? setDissabtes(horaris.properties.PRIMERA_SORTIDA + "-" + horaris.properties.ULTIMA_SORTIDA) :
            horaris.properties.ID_TIPUS_DIA === 3 ? setFestius(horaris.properties.PRIMERA_SORTIDA + "-" + horaris.properties.ULTIMA_SORTIDA) :
              null) : null

    );

  });




  console.log(horaris);

  if (horaris === null || horaris.length === 0) {

    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }









  return (
    <View style={styles.container}>
      <ScrollView >




        <Timetable feiners={feiners} divendres={feiners} dissabtesFinal={dissabtes} diumenges={festius} vigilies={festius} />



      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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

export default BLineTimetableScreen;