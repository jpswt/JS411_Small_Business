import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import cookie from 'cookie';
import Listings from './containers/Listings';
import BusinessDetails from './containers/BusinessDetails';
import Login from './containers/Login';
import AddListing from './containers/AddListing';

export const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies['loggedIn'] ? true : false;
};

const ProtectedRoutes = () => {
	return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
	return (
		<Routes>
			<Route element={<ProtectedRoutes />}>
				<Route path="/addListing" element={<AddListing />}></Route>
			</Route>
			<Route exact path="/" element={<Listings />} />
			<Route path="/business/:id" element={<BusinessDetails />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};
export default Router;
