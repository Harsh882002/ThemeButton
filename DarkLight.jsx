import { Children, useState,use, useContext } from "react";
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
    const {theme, handleToggleButton} = useContext(ThemeContext);
    return(
        <div className={`p-4 h-lvh flex flex-col justify-center
         items-center ${
            theme === "dark"? "bg-gray-800": "bg-white"
         } ` }>
            <h1 
            className={`my-4 text-xl ${theme === "light" ? "text-gray-800": "text-white"}`}
            >Dark Light Mode Website </h1>

            <p
            className={`my-2 text-l ${theme === "light" ? "text-gray-900":"text-white"}`}
            >Hello, My React V19 Fans </p>
            <button onClick={handleToggleButton}
            
            className={`bg-blue-600 hover:bg-blue-400 text-black rounded-md mt-4`}
            > {theme === "dark"? "Dark Mode" : "Light Mode"} </button>
        </div>
    )
}