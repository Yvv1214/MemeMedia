import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-1 text-center bg-success w-100 justify-content-center">
		<div className="d-flex justify-content-around p-1">
			<Link to='/'>Home</Link>
			<Link to='/login'>Login</Link>
			<Link to='/about'>About</Link>
		</div>
		<div className="col-12">
			<i className="far fa-copyright"></i> Copyright 2023
		</div>
	</footer>
);
