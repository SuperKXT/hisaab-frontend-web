import { useState, useEffect, useContext } from 'react';
import { Fab, Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { InvertColors } from '@material-ui/icons';

import ThemeTypeContext from 'contexts/ThemeTypeContext';

import Logo from 'components/Logo/Logo';

const useStyles = makeStyles(theme => ({
	aside: {
		backgroundColor: theme.palette.primary.main,
	},
	themeButton: {
		position: 'fixed',
		top: 15,
		left: 15,
	},
	heading: {
		fontWeight: 'normal',
	},
}));

const AuthContainer = () => {

	const { setIsDarkTheme } = useContext(ThemeTypeContext);

	const [user, setUser] = useState(null);
	const [password, setPassword] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		return () => {
			setUser(null);
			setPassword(null);
			setIsLoading(false);
		};
	}, []);

	const handleSubmit = (event) => {

		event.preventDefault();

		const postBody = { user, password };

	};

	const classes = useStyles();

	return (
		<>
			<Grid
				className={classes.aside}
				container
				justifyContent='center'
				alignItems='center'
				component='aside'
			>
				<Logo
					color='background'
					variant='default'
					width={250}
				/>
			</Grid>

			<Grid
				container
				justifyContent='center'
				alignItems='center'
				component='main'
			>

				<Grid
					container
					item
					xs={10}
					sm={8}
					direction='column'
					justifyContent='center'
					alignItems='center'
				>

					<Typography
						className={classes.heading}
						color='primary'
						variant='h1'
					>
						Welcome to Hisaab!
					</Typography>

					<form
						onSubmit={() => { }}
					>

						<TextField
							variant='outlined'
							label='Username/Email'
							value={user}
							onChange={(event) => setUser(event.target.value)}
							required
						/>

						<TextField
							variant='outlined'
							label='Password'
							type='password'
							value={user}
							onChange={(event) => setUser(event.target.value)}
							required
						/>

						<Button
							type='submit'
						>
							Log in
						</Button>

					</form>

				</Grid>

			</Grid>

			<Fab
				className={classes.themeButton}
				color='default'
				size='small'
				aria-label='switch theme'
				onClick={() => setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)}
			>
				<InvertColors color='primary' />
			</Fab>
		</>
	);
};

export default AuthContainer;