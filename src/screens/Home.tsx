import { Text, StyleSheet, View, TextInput, ImageBackground, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'

import Night from '../weatherBackground/night.jpg'
import Card from '../components/card/Card'
import { CitiesContext } from '../components/Context/SearchedCities'

interface Weather {
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
        humidity: number,
    },
    name: string,
    weather: [{
        description: string,
    }]

}

const Home = () => {
    const [weather, setWeather] = useState<Weather>()
    const [cityName, setCityName] = useState('');
    const { AddCity, city } = useContext(CitiesContext)

    // const [cities, setCities] = useState([]);

    const getweather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e6a3692c2e220fec8909888530171b83`)
            .then(res => res.json()).then(res => setWeather(res)).catch(err => console.log(err))

        if (weather?.name) {
            AddCity(weather.name)
        }
    }

    console.log("city " + city)
 
    return (
        <ImageBackground source={Night} resizeMode="cover" style={styles.image}>
            <View style={styles.HomeContainer} >
                <TextInput onChangeText={newText => setCityName(newText)} onSubmitEditing={() => getweather()}
                    placeholderTextColor={"white"} placeholder='Search for a local' style={styles.Input} />


                {weather ? <View style={styles.ShowWeather}>
                    <Text style={{ fontSize: 35, color: "#CBE4DE" }}> {weather?.name}</Text>
                    <Text style={{ fontSize: 20, color: "#CBE4DE" }}> {weather?.weather[0].description}</Text>
                    <Text style={styles.temp}>Temp: {(weather.main.temp - 273).toFixed(2)}°c </Text>

                    <View style={styles.Detailed}>
                        <Text style={styles.tempMinMax}>Max.:     </Text>
                        <Text style={styles.tempMinMax}>{(weather?.main.temp_max - 273).toFixed(2)}°c</Text>
                    </View>

                    <View style={styles.Detailed}>
                        <Text style={styles.tempMinMax}>Min.: </Text>
                        <Text style={styles.tempMinMax}>{(weather?.main.temp_min - 273).toFixed(2)}°c</Text>
                    </View>

                    <View style={styles.Detailed}>
                        <Text style={styles.tempMinMax}>Humidity:  </Text>
                        <Text style={styles.tempMinMax}>{weather?.main.humidity}%</Text>
                    </View>
                </View> :
                    <View>

                        <Text style={{ fontSize: 40, color: "white" }}>Search for a city</Text>
                    </View>
                }
            </View>

            <View style={{ flex: 1 }}>
               
                {city ?
                     <>
                     <Text style={{color:'#cbe4de', fontSize:20, marginBottom: 10, flex: 1, justifyContent: 'flex-end',}}>Searched Locations</Text>
                    <FlatList horizontal data={city} renderItem={({ item }) => (
                        <Card CityName={item} />
                    )} />
                    </>
                    :
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Text style={{ color: "#CBE4DE", fontSize: 20, justifyContent: "center", alignSelf: "center", marginBottom: 30 }}>
                            Your past locations will be saved here.
                        </Text>
                    </View>}

            </View>

        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },

    HomeContainer: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop: 25,
    },

    Input: {
        borderWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 30,
        width: 200,
        height: 40,
        marginBottom: 20,
        backgroundColor: "#CBE4DE",
        color: "white",
    },

    ShowWeather: {
        borderColor: "red",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 50,
    },

    temp: {
        fontSize: 30,
        flexDirection: "row",
        color: "#CBE4DE",
        marginVertical: 30,
    },

    Detailed: {
        border: 2,
        borderColor: "red",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
    },

    tempMinMax: {
        justifyContent: "space-between",
        fontSize: 18,
        marginHorizontal: 5,
        color: "#CBE4DE",
    },

})