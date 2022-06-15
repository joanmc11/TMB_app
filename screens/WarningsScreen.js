
import { ScrollView, StyleSheet, View } from 'react-native'
import Warnings from '../components/Warnings'
import Footer from '../components/Footer'


function WarningsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Footer colorText='#00796B' colorBack='#B2DFDB' text='Advertencies de circulació' size={18} />
        <Warnings informacio="Mesures de prevenció pel Coronavirus" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Warnings informacio="'Obrim Carrers' Barcelona" intercalat={true} />
        <Warnings informacio="Tall L5 de Diagonal a Vilapicina" intercalat={false} />
        <Footer colorText='#009688' colorBack='white' text='JAL Inc. TMB App' size={14} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch'
  }


});

export default WarningsScreen;