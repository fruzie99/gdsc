import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ToastAndroid } from 'react-native';
import Colors from './../../../assets/Colors/colors';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Signup() {  
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  
  React.useEffect(() => {
    // Perform conditional navigation here
  }, []);

  return (
    <ImageBackground source={require('./../../../assets/images/signup.jpg')} style={styles.backgroundImage}>
      <AntDesign name="back" size={24} color="black" onPress={() => router.back()} />
      
      <View style={styles.container}>
        <Text style={styles.title}>Create a New Account</Text>
       
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.replace('auth/Sign-In')}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.replace('auth/Sign-In')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.99,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
    width: 160,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
