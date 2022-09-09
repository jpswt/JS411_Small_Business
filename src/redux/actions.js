// export const userLogin = (user) => {
// 	return {
// 		type: 'USER_LOGIN',
// 		value: user,
// 	};
// };

// export const userLogout = (user) => {
// 	return {
// 		type: 'USER_LOGOUT',
// 		value: user,
// 	};
// };

export const updateUser = (user) => {
	return {
		type: 'UPDATE_USER',
		value: user,
	};
};

export const addListing = (newListing) => {
	return {
		type: 'ADD_LISTING',
		value: newListing,
	};
};

export const deleteListing = (index) => {
	return {
		type: 'DELETE_LISTING',
		value: index,
	};
};

// export const fetchLocation = (listing) => {
// 	const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// 	return (dispatch) => {
// 		fetch(
// 			`https://maps.google.com/maps/api/geocode/json?address=${listing.address}&key=${apiKey}`
// 		)
// 			.then((res) => res.json())
// 			.then((response) => {
// 				const action = {
// 					type: 'FETCH_LOCATION',
// 					value: response.results,
// 				};
// 				dispatch(action);
// 				console.log('The response.Results are:', listing);
// 			})
// 			.catch((e) => {
// 				console.log(e);
// 			});
// 	};
// };
