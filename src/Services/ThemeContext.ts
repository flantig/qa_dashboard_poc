import {createContext, useContext} from "react";

export type ThemeContext = {
    theme: string
    setTheme: (c: string) => void
}

export const MyThemeContext = createContext<ThemeContext>({
    theme: 'light',
    setTheme: () => {}
})

export const useThemeContext = () => useContext(MyThemeContext);