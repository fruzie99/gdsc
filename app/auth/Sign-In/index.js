import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React,{ useEffect } from 'react'; 
import Colors from './../../../assets/Colors/colors';
import {useNavigation, useRouter} from 'expo-router';


import AntDesign from '@expo/vector-icons/AntDesign';
export default function Signin() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const Navigator=useNavigation();
    // useEffect(()=>{navigation.setOptions({
    //   headershown:false
    // })},[])

    const router=useRouter();
  const handleLogin = () => {
    
    console.log('Login button pressed');
  };

  return (
    <ImageBackground source={require('./../../../assets/images/signup.jpg')} style={styles.backgroundImage}>
      <TouchableOpacity onPress={()=>router.back()}
        style={{padding:30,
          
        }}>

      <AntDesign name="back" size={24} color="black" />
      
      </TouchableOpacity>
      <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.title}>Let's Sign You In</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={()=>router.replace('main')}>
          <Text style={styles.buttonText}>Sign-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Signup')}>
        
  
  <TouchableOpacity style={styles.createAccountButton} onPress={()=>router.replace('/auth/Sign-Up')}>
    <Text style={styles.createAccountButtonText}>Create Account</Text>
  </TouchableOpacity>
</TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
    width:120
  },
  buttonText: {
    color:Colors.white,
    fontSize: 16,
    textAlign:'center'
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 5,
  },
  createAccountButtonText: {
    color:Colors.white,
    fontSize: 16,
  },
});