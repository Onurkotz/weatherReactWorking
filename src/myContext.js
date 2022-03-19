import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("red")

const values = {
    theme,
    setTheme,
};

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
    
}

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext)