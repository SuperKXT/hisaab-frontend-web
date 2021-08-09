import React from 'react';
import PropTypes from 'prop-types';
import { MuiButton } from '@material-ui/core';

const Button = ({
	type,
	size,
	label,
}) => {

	return (
		<MuiButton
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</MuiButton>
	);
};

Button.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
};

export default Button;
