import { createContext, ReactNode, useState } from "react";

interface CityContext {
    AddCity: (name: string) => void
    city: any
}

interface CitiesProvider {
    children: React.ReactNode
}


export const CitiesContext = createContext({} as CityContext);

export const CitiesProvider = ({ children }: CitiesProvider) => {
    const [city, setCity] = useState<string[]>([])


    function AddCity(name: string) {

        setCity([...city, name])
    }

    return <CitiesContext.Provider value={{ AddCity, city }}>{children}</CitiesContext.Provider>

}