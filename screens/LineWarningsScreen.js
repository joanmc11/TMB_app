
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import LineWarnings from '../components/LineWarnings'
import { getLineasMetro } from '../api'
import { ModelContext } from '../model'
import Footer from '../components/Footer'

function LineWarningsScreen() {

  const [warnings, setWarnings] = useState([]);
  const { codiLinea } = useContext(ModelContext);


  const loadWarnings = async () => {

    const features = await getLineasMetro(codiLinea);


    setWarnings(features);


  };

  useEffect(() => {
    loadWarnings();


  }, []);

  if (warnings === null || warnings.length === 0) {
    return (<View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>);
  }

  const data = warnings[0].properties.DATA;
  const data2 = data.substring(0, 10);

  return (


    <View style={styles.container}>
      <LineWarnings data={data2} data2="" informacio="Mesures de prevenció pel Coronavirus" />
      <View style={styles.container}><Footer colorText='#00796B' colorBack='#B2DFDB' text='JAL Inc. TMB App' size={14} /></View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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

export default LineWarningsScreen;