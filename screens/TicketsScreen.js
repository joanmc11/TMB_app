
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import TicketImageName from '../components/TicketImageName'
import TicketPriceTable from '../components/TicketPriceTable'
import TicketSelect from '../components/TicketSelect'
import React, { useState } from 'react'
import Footer from '../components/Footer'


function TicketsScreen() {
  const [tipus, setTipus] = useState('T-usual');
  const [text, setText] = useState('unipersonal amb viatges il·limitats durant 30 dies');
  const [zona1, setZona1] = useState("40,00");
  const [zona2, setZona2] = useState("53,85");
  const [zona3, setZona3] = useState("75,60");

  const setSwitch = (type) => {
    setTipus(type);
    switch (type) {
      case 'T-usual':
        setZona1("40,00"); setZona2("53,85"); setZona3("75,60"); setText("unipersonal amb viatges il·limitats durant 30 dies");
        break;
      case 'T-casual':
        setZona1("11,35"); setZona2("22,40"); setZona3("30,50"); setText("unipersonal amb 10 viatges");
        break;
      case 'T-jove':
        setZona1("80,00"); setZona2("105,20"); setZona3("147,55"); setText("unipersonal amb viatges il·limitats durant 90 dies");
        break;
      case 'T-dia':
        setZona1("10,50"); setZona2("16,00"); setZona3("20,10"); setText("unipersonal amb viatges il·limitats durant 24 hores");
        break;
      case 'T-grup':
        setZona1("79,45"); setZona2("156,80"); setZona3("213,50"); setText("multipersonal amb 70 viatges durant 30 dies");
        break;
      case 'T-familiar':
        setZona1("10,00"); setZona2("19,00"); setZona3("27,00"); setText("multipersonal amb 8 viatges durant 30 dies");
        break;
      case 'T-aire':
        setZona1("2,05"); setZona2("4,05"); setZona3("5,50"); setText("multipersonal amb 2 viatges integrats");
        break;

    }

  }

  return (
    <View style={styles.container}>
      <ScrollView >
        <TicketSelect onChange={(type) => setSwitch(type)} />
        <TicketImageName bitllet={tipus} />
        <TicketPriceTable text={text} zona1={zona1} zona2={zona2} zona3={zona3} />
        <View style={{ alignSelf: 'stretch' }}>
          <Footer colorText='#009688' colorBack='transparent' text='JAL Inc. TMB App' size={14} />
        </View>
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
  }


});

export default TicketsScreen;