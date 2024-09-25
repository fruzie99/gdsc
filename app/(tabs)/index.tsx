import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import Login from "./../../pages/Login";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={styles.welcomeText}>Welcome to GDSC!</Text>
     
    // </View>
    <Login />
  );
}

{/* const styles = StyleSheet.create({
  welcomeText: {
   
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize:30,
    fontFamily:'Poppins'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
}); */}
