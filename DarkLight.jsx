import { Children, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =  ({children}) =>{

    const [theme, setTheme ]= useState("dark")

    return(
        <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
    );
};


export const DarkLight = () =>{
    return(
        <div>
            <h1>Dark Light Mode Website </h1>
            <p>Hello, My React V19 Fans </p>
            <button>Switch to light Mode </button>
        </div>
    )
}