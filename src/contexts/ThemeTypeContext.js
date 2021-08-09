import { createContext } from "react";

const ThemeTypeContext = createContext({
	isDarkTheme: false,
	setIsDarkTheme: undefined,
});

export default ThemeTypeContext;