import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import Logo from 'components/Logo/Logo';

const Login = () => {

	const theme = useTheme();

	return (
		<>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				component='aside'
			>
				<Logo color='background' variant='opposite' width={1} />
			</Grid>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				component='main'
			>

			</Grid>
		</>
	)
}

export default Login;