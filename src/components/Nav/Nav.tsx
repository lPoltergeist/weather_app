import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import {Rows, Waves} from 'phosphor-react-native'

export default function Nav() {
 
    return (
      <View style={style.homeContainer}>
        <Waves color='white'/>
        <Text style={{color:"white", fontSize:20}}>Weather App</Text>
      </View>
    )
}

const style = StyleSheet.create({
homeContainer:{
  flexDirection: 'row',
  justifyContent: "space-between",
  
  padding: 10,
  alignContent: "center",
  backgroundColor: '#0E8388',
}


})