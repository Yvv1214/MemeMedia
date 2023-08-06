import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Contents = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="text-center mt-5">
			<h1>Welcome</h1>
            
			<form className="container w-25 p-4 bg-success">

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="first name"></input>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="last name"></input>
                </div>

			<div className="form-group ">
				<label for="exampleEmail">Email address</label>
				<input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com"></input>
			</div>

			<div className="form-group mt-2">
				<label for="passwordInput">Password</label>
				<input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
			</div>

            <div className="form-group mt-2">
				<label for="passwordInput2">Re-enter Password</label>
				<input type="password" className="form-control" id="passwordInput2" placeholder="Re-enter Password"></input>
			</div>

			<button type="submit" className="btn btn-primary mt-2">Create Account</button>

			<div className="mt-2">
				<Link to={'/'}>
				<a href="#">Return Home</a>
				</Link>
			</div>

			</form>
		</div>
	);
};