import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ImageBackground} from 'react-native';
import { CitiesProvider } from './src/components/Context/SearchedCities';
import Nav from './src/components/Nav/Nav';
import Home from './src/screens/Home';


export default function App() {

  return (
    <SafeAreaView style={style.container}>
     <StatusBar hidden={true} backgroundColor='transparent'/>
   <CitiesProvider>
   <Nav/>
    <Home/>
   </CitiesProvider>
     </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#2C3333",
    flex: 1,
  },
})