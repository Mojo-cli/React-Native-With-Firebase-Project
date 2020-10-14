import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BwBgD = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
    <Text style={styles.text}>{props.text}</Text>
    </View>
  )
return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button:{
     marginTop:20,
     padding:10,
     width:100,
     borderWidth:2,
     borderColor:"#03c4a1",
     marginLeft:50,
     borderRadius:10
  },
  text:{
  color:"white",
  textAlign:"center",
  fontSize:10,
  fontWeight:'bold'
  }
});

export default BwBgD;
