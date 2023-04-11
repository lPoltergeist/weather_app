import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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

    SearchedLocations: {
        color: "#CBE4DE",
        fontSize: 22,
        marginLeft: 10,
       
    }
})