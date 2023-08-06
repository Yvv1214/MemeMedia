import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()
	const token = localStorage.getItem('token')
	console.log(token, 'your token')

 //requesting token frontend from flux file action.login
	const submit = () => {
	 	actions.login(email, password).then(() => {
				history.push('/contents')
		})
	 }



	return (
		<div className="text-center mt-5">
			<h1>Please Sign In </h1>


			{/* if token exist and token isnt '' and undefined login success else fill this form */}
			{(token && token !=="" && token != undefined) ? "login successfull with this token" + token : 

			<form className="container w-25 p-4 bg-light">
			<div className="form-group ">
				<label for="loginEmail">Email address</label>
				<input type="email" className="form-control" id="loginEmail" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)}></input>
			</div>

			<div className="form-group mt-2">
				<label for="loginPassword">Password</label>
				<input type="password" className="form-control" id="loginPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
			</div>

			<div className="form-check d-flex justify-content-center mb-2">
				<input type="checkbox" className="form-check-input me-1" id="dropdownCheck2"></input>
				<label className="form-check-label" for="dropdownCheck2">
				Remember me
				</label>
			</div>
			
			<button type="submit" className="btn btn-primary mt-2" onSubmit={submit}>Sign in</button>

			<div className="mt-2">
				<Link to={'./new_user'}>
				<a href="#">New User? Create Account Here</a>
				</Link>
			</div>
			</form>
			}

		</div>
	);
}
