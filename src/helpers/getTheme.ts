import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
	interface TypeBackground {
		opposite: React.CSSProperties['color'],
		light: React.CSSProperties['color'],
		dark: React.CSSProperties['color'],
	}
}

/**
 * Get the theme to pass to the ThemeProvider
 * @param {boolean} isDarkTheme - Is the current theme dark?
 * @returns {Theme} Material UI Theme
 */
const getTheme = (isDarkTheme: boolean) => createTheme({
	palette: {
		type: isDarkTheme ? 'dark' : 'light',
		background: {
			default: isDarkTheme ? '#3D2647' : '#F5F5F5',
			opposite: isDarkTheme ? '#F5F5F5' : '#3D2647',
			light: '#F5F5F5',
			dark: '#3D2647',
		},
		primary: {
			dark: '#A636D6',
			main: '#CE7DF0',
			light: '#E2B1F6',
			contrastText: '#FFFFFF',
		},
		secondary: {
			dark: '#E62243',
			main: '#E0415C',
			light: '#E86D82',
			contrastText: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: 'Roboto Slab',
		fontWeightRegular: 300,
		fontSize: 12,
		h1: {
			fontWeight: 800,
			fontSize: '3em',
		},
	},
});

export default getTheme;