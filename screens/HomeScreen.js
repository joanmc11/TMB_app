import { StatusBar } from 'expo-status-bar'
import { useEffect, useContext } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/Footer'
import Logobus from '../components/svg/icones/logobus'
import Logoibus from '../components/svg/icones/logoibus'
import LogoMetro from '../components/svg/icones/logometro'
import Logoticket from '../components/svg/icones/logoticket'
import LogoTMB from '../components/svg/icones/logotmb'
import Logowarning from '../components/svg/icones/logowarning'
import { ModelContext } from "../model";
import { getAllBusStops } from '../api';



function HomeScreen({ navigation }) {



  const { setAllParades, allParades } = useContext(ModelContext);



  const loadBusStops = async () => {
    const allBusStops = await getAllBusStops();

    setAllParades(allBusStops);
  };

  useEffect(() => {

    loadBusStops();

  }, []);

  if (allParades == [] || allParades == null) {
    return (
      <View style={styles.containerLoad}><Text style={styles.loading}>Loading...</Text></View>
    );

  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container1}>
        <View style={styles.circle} ></View>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <LogoTMB />
        </View>
        <View style={{ position: 'absolute', top: 250, left: 0, right: 180, bottom: 0, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable style={styles.space} onPress={() => navigation.navigate('Linies de Metro')}>
            <LogoMetro />
          </Pressable>
        </View>
        <View style={{ position: 'absolute', top: 250, left: 180, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable style={styles.space} onPress={() => navigation.navigate('Linies de Bus')}>
            <Logobus />
          </Pressable>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 280, right: 0, bottom: 35, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable style={styles.space} onPress={() => navigation.navigate('Advertències')}>
            <Logowarning />
          </Pressable>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 280, bottom: 35, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable style={styles.space} onPress={() => navigation.navigate('Tickets')}>
            <Logoticket />
          </Pressable>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 280, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable style={styles.space} onPress={() => navigation.navigate('iBus')}>
            <Logoibus />
          </Pressable>
        </View>

        {/*} <ScrollView style={{ flexDirection: 'row', backgroundColor: 'B2DFDB' }} horizontal={true}>


          <Pressable style={styles.space} onPress={() => navigation.navigate('iBus')}><Logoibus /></Pressable>
          <Pressable style={styles.space} onPress={() => navigation.navigate('Linies de Metro')}><LogoMetro /></Pressable>
          <Pressable style={styles.space} onPress={() => navigation.navigate('Linies de Bus')}><Logobus /></Pressable>

          <Pressable style={styles.space} onPress={() => navigation.navigate('Advertències')}><Logowarning /></Pressable>
          <Pressable style={styles.space} onPress={() => navigation.navigate('Tickets')}><Logoticket /></Pressable>

        </ScrollView>
        <Footer></Footer>
  <StatusBar style="auto" />*/}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#009688'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  space: {
    paddingHorizontal: 25
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
  },
  circle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2DFDB',
    borderRadius: 300,
    height: 300,
    width: 300
  }

});

export default HomeScreen;