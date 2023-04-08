import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

interface CardInfo {
    citySaved?: {
    },
    main?: {
      name?: string | undefined,
    }
    
}

const Card = (CityName: any) => {
  const [citySaved, setCitySaved] = useState<CardInfo>()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=e6a3692c2e220fec8909888530171b83`)
    .then(res => res.json()).then(res => setCitySaved(res)).catch(err => console.log(err));

    console.log(citySaved);
  },[CityName])
  console.log(citySaved)

  return (
    <TouchableOpacity style={styles.CardContainer}>
      <Text style={{color:'#cbe4de', fontSize:20, marginBottom: 10}}>Searched Locations</Text>
      <View style={{height:100, width: 100, borderRadius:10, padding:10, backgroundColor:"rgba(14, 131, 136, 0.8)"}}>
        <Text>batata</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    CardContainer: {
        marginVertical: 36, 
        marginHorizontal: 10, 
        flex: 1, 
        justifyContent:'flex-end'
    },

    TextCard: {
        color: "#CBE4DE",
        fontSize: 20,
    }
})