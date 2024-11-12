import { Children, useState,use } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =  ({children}) =>{

    const [theme, setTheme ]= useState("dark")

    const handleToggleButton = () =>{
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light": "dark"));
    };

    return(
        <ThemeContext.Provider value={{ theme, handleToggleButton }}>{children}</ThemeContext.Provider>
    );
};


export const DarkLight = () =>{
    const {theme, handleToggleButton} = use(ThemeContext);
    return(
        <div>
            <h1>Dark Light Mode Website </h1>
            <p>Hello, My React V19 Fans </p>
            <button onClick={handleToggleButton}> {theme === "dark"? "Dark Mode" : "Light Mode"} </button>
        </div>
    )
}