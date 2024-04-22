import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/logo-t.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* <Text style={styles.title}>Welcome to Shoe Haven</Text> */}
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Store')}
        >
          <Text style={styles.buttonText}>Explore Now</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width:'100%',
    backgroundColor:'#212121',
  },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'4%',
    backgroundColor: '#ff7043',
    width: '60%',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 20,
  },
});

export default HomeScreen;
