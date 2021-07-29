import React from "react";
//import Routes from './router'
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayjsFnsUtils from '@date-io/dayjs';

import GlobalStyles from 'helpers/GlobalStyles';

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem("token") ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={3}>
				<MuiPickersUtilsProvider utils={DayjsFnsUtils}>
					<Router>

						<CssBaseline />
						<GlobalStyles />

						<ProtectedRoute
							exact
							path={"/"}
							component={Home}
						/>

						<Route path="/login" exact component={SignIn} />

						<Redirect
							to={{
								pathname: "/",
							}}
						/>

					</Router>
				</MuiPickersUtilsProvider>

			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
