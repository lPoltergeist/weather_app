import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

interface CardInfo {
    citySaved?: {
      name?: string,
    },
    main?: {
      temp?: number | undefined
    }
    
}

const Card = (CityName: any) => {
  const [citySaved, setCitySaved] = useState<CardInfo>()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName.CityName}&appid=e6a3692c2e220fec8909888530171b83`)
    .then(res => res.json()).then(res => setCitySaved(res)).catch(err => console.log(err));

  },[CityName])

  console.log(JSON.stringify(CityName.CityName))
  console.log("citySaved " + JSON.stringify(citySaved))

  return (
    <TouchableOpacity style={styles.CardContainer}>
      <View style={{height:100, width: 100, borderRadius:10, padding:10, backgroundColor:"rgba(14, 131, 136, 0.8)"}}>
        <Text style={{color:"#CBE4DE", fontSize: 13}}>{citySaved?.name}</Text>
        <Text style={{fontSize: 12, color:"#CBE4DE"}}>temp: {(citySaved?.main?.temp - 273).toFixed(2)}°c</Text>
        <Text style={{fontSize: 12, color:"#CBE4DE"}}>max: {(citySaved?.main?.temp_max - 273).toFixed(2)}°c</Text>
        <Text style={{fontSize: 12, color:"#CBE4DE"}}>min: {(citySaved?.main?.temp_min - 273).toFixed(2)}°c</Text>
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