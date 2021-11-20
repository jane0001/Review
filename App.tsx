import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import hair from './images/hair bg.jpg' 
//import hair from './images/hair bg.jpg' 


export default function App() {
  return (
    <ImageBackground source = {bgImage.jpg} style={styles.container}>
     <Text style={styles.header}>WELCOME TO BBS SALON! WE ARE AT YOUR SERVICE</Text>
      
    </ImageBackground>
    //<View style={styles.container}>
      //<Image source={hair} style={{width:300,height:120}} />
     // <Text style={styles.header}>WELCOME TO BBS SALON! WE ARE AT YOUR SERVICE</Text>
      
      //<StatusBar style="auto" />
    //</View>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:null,
    width:null,
  },
  header:{
    fontWeight:'100',
    fontsize:'40',
    color:'black',
  }
});
