import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-success">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">MemeMedia</span>
				</Link>

				<Link to='/newPost'>
					<button className="newPostBtn btn">
					<i class="fas fa-plus-square"></i> New Post</button>
				</Link>

				<div className="ml-auto">

					{!store.token ? (
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					) : (
					<button onClick={() => actions.logout()} className="btn btn-primary">Log out</button>
					)}

				</div>
			</div>
		</nav>
	);
};
