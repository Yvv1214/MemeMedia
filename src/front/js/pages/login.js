import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';



export const Login = () => {

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	console.log(token, 'your token')

 //requesting token frontend from flux file action.login
	const submit = (e) => {
		e.preventDefault()
		actions.login(email,password)			 	
	 }

	return (
		<div className="text-center mt-5">
			<h1>Please Sign In </h1>


			{/* if token exist and token isnt '' and undefined login success u get redirected to login successfule, else fill this form */}
			{(token && token !== "" && token !== undefined) ? "login successfull with this token" + token :
			

			<form className="container w-25 p-4 bg-light" onSubmit={(e) => submit(e)}>
			<div className="form-group ">
				<label for="loginEmail">Email address</label>
				<input type="text" className="form-control" id="loginEmail" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)}></input>
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
			
			<button type="submit" className="btn btn-primary mt-2">Sign in</button>

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
