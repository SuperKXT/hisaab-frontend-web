import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import DayjsFnsUtils from '@date-io/dayjs';
import { HelmetProvider } from 'react-helmet-async';

import ThemeTypeContext from 'contexts/ThemeTypeContext';

import GlobalStyles from 'helpers/GlobalStyles';
import getTheme from 'helpers/getTheme';

const pages = [];
const importPages = (loaded) => {
	pages.push(...loaded.keys().map(row => row.replace(/(\.\/)|(\.jsx)/g, '')));
};
importPages(require.context('containers/pages', false, /\.jsx$/));

const RouteMatcher = ({ page }) => {

	if (!['login', 'signup'].includes(page.toLowerCase()) && !localStorage.getItem('session')) {

		return <Redirect to='login' />;
	}

	const Component = lazy(() => import(`containers/pages/${page}`));

	return (
		<>
			<Helmet>
				<title>{page} | Hisaab</title>
			</Helmet>

			<Suspense fallback={<div>Loading...</div>}>
				<Component />
			</Suspense>
		</>
	);

};

const App = () => {

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const [isDarkTheme, setIsDarkTheme] = useState(true);

	useEffect(() => {
		setIsDarkTheme(prefersDarkMode);
	}, [prefersDarkMode]);

	return (
		<ThemeProvider theme={getTheme(isDarkTheme)}>
			<SnackbarProvider maxSnack={3}>
				<MuiPickersUtilsProvider utils={DayjsFnsUtils}>
					<HelmetProvider>
						<ThemeTypeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>

							<CssBaseline />
							<GlobalStyles />

							<Router>

								{pages.map(page =>
									<Route
										key={page}
										path={`/${page.toLowerCase()}`}
										exact
									>
										<RouteMatcher page={page} />
									</Route>
								)}

								<Redirect to='/404' />

							</Router>

						</ThemeTypeContext.Provider>
					</HelmetProvider>
				</MuiPickersUtilsProvider>
			</SnackbarProvider>
		</ThemeProvider>

	);
};

export default App;
