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
		boxShadow: 'unset',
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.background.default,
		transition: 'transform 0.05s linear',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
			transform: 'scale(1.05)',
		},
		'&:active': {
			boxShadow: 'unset',
			transform: 'scale(0.95)',
		},
	},
	heading: {
		fontWeight: 'normal',
	},
}));

const Login = () => {

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

					<Grid
						item
						container
						direction='column'
						onSubmit={handleSubmit}
						spacing={4}
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
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
						/>

						<Button
							type='submit'
							variant='contained'
						>
							Log in
						</Button>

					</Grid>

				</Grid>

			</Grid>

			<Fab
				className={classes.themeButton}
				size='small'
				aria-label='switch theme'
				onClick={() => setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)}
			>
				<InvertColors color='inherit' />
			</Fab>
		</>
	);
};

export default Login;