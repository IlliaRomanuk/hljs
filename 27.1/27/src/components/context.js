import { createContext } from "react";
export const themes = {
    white:{
        color: 'black',
        background: 'white'
    },
    black:{
         color: 'white',
        background: 'black'
    }
}
export const ThemeContext = createContext();