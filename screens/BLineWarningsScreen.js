
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import LineWarnings from '../components/LineWarnings'
import { getLineasBus } from '../api'
import { ModelContext } from '../model'
import Footer from '../components/Footer'


function BLineWarningsScreen({ navigation }) {

  const [warnings, setWarnings] = useState([]);
  const { codiLinea } = useContext(ModelContext);


  const loadWarnings = async () => {

    const features = await getLineasBus(codiLinea);


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
    <View style={{ justifyContent: 'center', alignSelf: 'stretch' }}>
      <ScrollView >
        <LineWarnings data={data2} data2="" informacio="Mesures prevenció pel Coronavirus" />
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

export default BLineWarningsScreen;