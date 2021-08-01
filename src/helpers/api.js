//@ts-check

const apiUrl = (
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_API_PRODUCTION
		: process.env.REACT_APP_API_DEVELOPMENT
);

//! Get Requests


const getRequest = () => new Promise((resolve, reject) => {

	fetch(`${apiUrl}/`)

});

//! Post