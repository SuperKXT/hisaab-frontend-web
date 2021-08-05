// 1. GlobalStyles.js
import { createStyles, makeStyles } from '@material-ui/core';

const scrollStyles = {
	scrollbarWidth: 'thin',
	scrollbarColor: 'grey lightgrey',
	scrollBehavior: 'smooth',
};

const useStyles = makeStyles(() =>
	createStyles({
		'@global': {
			body: {
				overflow: 'hidden',
			},
			label: {
				textTransform: 'capitalize',
			},
			th: {
				textTransform: 'capitalize',
			},
			'#root': {
				display: 'flex',
				overflow: 'hidden',
			},
			'::-webkit-scrollbar': {
				height: 10,
				width: 10,
				background: 'lightgrey'
			},
			'::-webkit-scrollbar-thumb': {
				background: 'grey',
			},
			'.scroll-x': {
				...scrollStyles,
				overflowX: 'auto',
				overflowY: 'hidden',
				flexWrap: 'nowrap',
			},
			'.scroll-y': {
				...scrollStyles,
				overflowX: 'hidden',
				overflowY: 'auto',
				flexWrap: 'nowrap',
			},
			'.scroll-xy': {
				...scrollStyles,
				overflowX: 'auto',
				overflowY: 'auto',
				flexWrap: 'nowrap',
			},
			'.hide': {
				display: "none",
			}
		}
	})
);

const GlobalStyles = () => {
	useStyles();

	return null;
};

export default GlobalStyles;