import React, { useState, useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import LineButtons from "../components/LineButtons";
import SearchBox from "../components/SearchBox";
import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { mapStyle } from "../mapa/mapStyle";
import BackButton from "../components/svg/BackButton2";
import { ModelContext } from "../model";
import Footer from "../components/Footer";
import BusLineTitle from '../components/BusLineTitle';
import MapView from "react-native-map-clustering";




function IBLinesScreen({ navigation }) {

  const [switchMap, setSwitchMap] = useState(true);

  const { setCodiLinia, afegeixCerca, busquedas, allParades, eliminaCerques } = useContext(ModelContext);






  const changeHistorial = (bool) => {
    setSwitchMap(bool);
  };





  //console.log(busStopsData.length);

  const setPage = (codi) => {
    setCodiLinia(codi.codi);
    navigation.navigate("Informació Parada");
    afegeixCerca(codi);
  };

  const mapMarkers = () => {
    return (allParades.map((marker, index) =>
      index < 2676 ? (

        <Marker
          key={index}
          coordinate={{
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0],
          }}
          image={require("../assets/images/SecondaryIcons/Indicadorbus.png")}
          title={marker.properties.NOM_PARADA}
          description={
            "Codi parada: " + marker.properties.CODI_PARADA
          }
          tracksViewChanges={false}
        >
          <Callout
            onPress={() => setPage({ nom: marker.properties.NOM_PARADA, codi: marker.properties.CODI_PARADA })}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {marker.properties.NOM_PARADA}
                </Text>
                <Text>
                  {"Codi parada: " + marker.properties.CODI_PARADA}
                </Text>
              </View>
              <BackButton
                style={styles.backButton}
              />
            </View>
          </Callout>
        </Marker>
      ) : null
    ));
  }


  return (
    <View style={styles.container1}>
      <View>
        <View style={styles.searchContainer}>

          <SearchBox

            navigation={navigation}
          />
        </View>
        <LineButtons
          origen="MAPA"
          desti="HISTORIAL"
          onChange={(bool) => changeHistorial(bool)}
        />

        {switchMap ? (
          <View
            style={{
              backgroundColor: "#B2DFDB",
              height: 350,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                width: "90%",
                height: 290,
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <MapView
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                style={styles.mapView}
                initialRegion={{
                  latitude: 41.3995345,
                  longitude: 2.1909796,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                mapType="standard"
              >
                {mapMarkers()}
              </MapView>

            </View>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "#B2DFDB",
              height: 350,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                width: "90%",
                height: 290,
                borderRadius: 30,
              }}
            >

              <FlatList

                data={busquedas.reverse()}
                renderItem={({ item, index }) => (

                  <View key={item.codi}>
                    <Pressable onPress={() => setPage(item)} key={item.codi}><BusLineTitle line={item.codi} principi={item.nom} ibus={true} key={item.codi} /></Pressable>



                  </View>
                )}
              />

              {console.log(busquedas)}
              {busquedas.length == 0 ? <View style={styles.container1}><Text style={styles.noHistorial}>No tens busquedes a l'historial</Text></View> :
                <Button
                  onPress={() => eliminaCerques()}
                  title="Eliminar historial"
                  color="#009688"

                />}

            </View>
          </View>
        )}
      </View>
      <Footer colorText='#009688' colorBack='#B2DFDB' text='JAL Inc. TMB App' size={14} />

    </View>
  );
}

const styles = StyleSheet.create({
  container1:
  {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  searchContainer: {
    alignSelf: "flex-start",
    padding: 50
  },
  noHistorial: {
    alignSelf: 'center',
    color: '#009688',
    fontWeight: 'bold',
    fontSize: 16
  },
  mapView: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    borderRadius: 50,
  },
  backButton: {
    alignSelf: "center",
    marginLeft: 20
  }


});

export default IBLinesScreen;
