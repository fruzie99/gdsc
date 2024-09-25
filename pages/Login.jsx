import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from './../assets/Colors/colors';
import {useNavigation, useRouter} from 'expo-router';

export default function Login() {
  const Navigator=useNavigation();
    const router=useRouter()
  return (
    <View>
      <Image 
        source={require('./../assets/images/bgog.png')} 
        style={styles.image}
      />
      
      <View style={styles.container}>
        <Text style={styles.heading}>Google Developer Groups on Campus</Text>
        
        <Text style={styles.paragraph}>
          Google Developer Groups on Campus VNRVJIET is a community of tech enthusiasts, driven by a shared passion for technology and innovation. We organize to bridge the gap between theory and practical application. We provide valuable resources, mentorship, and a collaborative platform for growth. Join us to enhance your skills, learn from industry leaders, and be part of a community that’s shaping the future of technology.
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={() => {router.push('/auth/Sign-In');}}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    backgroundColor: Colors.grey,
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -20,
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.black,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'justify', 
    color: Colors.black,
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: Colors.green, 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

});