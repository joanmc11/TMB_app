
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { getIBus, getAllBusStops } from '../api';
import BusLineTitle from '../components/BusLineTitle'
import RealBusLineName from '../components/RealBusLineName'
import RealBusTitle from '../components/RealBusTitle'
import { ModelContext } from "../model";
import Logowarning from "../components/svg/icones/logowarning";
import Footer from '../components/Footer';

function BStationInfoScreen({ navigation }) {

  const [dataBus, setIbus] = useState([]);
  const { codiLinea } = useContext(ModelContext);

  const [nomParada, setNomParada] = useState();
  const [paradas, setAllParadas] = useState([]);

  const [time, setTime] = useState(0);
  const [diferencia, setDiferencia] = useState(0);



  const loadIbus = async () => {

    const ibus = await getIBus(codiLinea);
    setIbus(ibus);

  };



  const loadAll = async () => {

    const allBusStops = await getAllBusStops();

    setAllParadas(allBusStops);


  }

  const setCont = () => {

    var time1 = new Date().getSeconds();
    setTime(time1);

  }



  const parad = () => {
    paradas.map((paradas, index) => {

      paradas.properties.CODI_PARADA == codiLinea ? setNomParada(paradas.properties.NOM_PARADA) : null;
    })
  }

  useEffect(() => {
    loadIbus();
    loadAll();
    setCont();


  }, []);
  useEffect(() => {

    parad();

    const interval = setInterval(() => {
      var time2 = new Date().getSeconds();
      setDiferencia(time2 - time);
    }, 1000);

    return (() => { clearInterval(interval); });

  });


  if (dataBus === null || dataBus.length === 0 || paradas === null || paradas.length === 0) {
    return (<View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>);

  }


  if (nomParada == null) {
    return (<View style={styles.container2}><Logowarning style={{ alignSelf: 'center' }} /><Text style={styles.noCode}>Codi inexistent</Text></View>)
  }


  return (

    <View style={styles.container}>

      <ScrollView >
        <BusLineTitle line={codiLinea} principi={nomParada} ibus={true} />
        <RealBusTitle titol="Properes Arribades" time={diferencia <= 60 ? "Actualitzat fa " + diferencia + " segons" : "Actualitzat fa molt de temps"} />

        {dataBus.ibus.map((bus, index) =>


          <RealBusLineName color="red" linea={bus.line} start="Direcció" end={bus.destination} time={bus['t-in-min'] == 0 ? "imminent" : bus['t-in-min'] + " min"} separador={index} />


        )}
        <FlatList
          data={dataBus}
          renderItem={({ item, index }) => (
            <RealBusLineName color="red" linea={item.line} start="Direcció" end={item.destination} time={item['t-in-min'] == 0 ? "imminent" : item['t-in-min'] + " min"} separador={index} />

          )}
        />
        <View style={styles.noService}>
          {dataBus.ibus.length == 0 ?
            <Text style={styles.text}>Cap servei disponible per aquesta parada</Text>
            : null}
        </View>

      </ScrollView>
      <Footer colorText='#009688' colorBack='transparent' text='JAL Inc. TMB App' size={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch'

  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#B2DFDB'
  },
  text: {

    padding: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#FF5252'
  },
  loading: {
    color: '#009688',
    padding: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
  noService: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#B2DFDB'
  },
  noCode: {
    color: '#FF5252',
    padding: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  }


});

export default BStationInfoScreen;