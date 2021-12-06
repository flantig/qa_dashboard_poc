import {createContext, useContext} from "react";

export type ThemeContext = {
    theme: boolean
    setTheme: (c: boolean) => void
}

export const MyThemeContext = createContext<ThemeContext>({
    theme: true,
    setTheme: () => {}
})

export const useThemeContext = () => useContext(MyThemeContext);