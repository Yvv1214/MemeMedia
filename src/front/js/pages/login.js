import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';



export const Login = () => {

	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [rememberMe,  setRememberMe] = useState(false)
	const navigate = useNavigate()


	const submit = (e) => {
		e.preventDefault()
		actions.login(username,password)			 	
	 }


	 const RememberMe = () => {
		if (rmCheck.checked && emailInput.value !== "") {
		  localStorage.username = emailInput.value;
		  localStorage.checkbox = rmCheck.value;
		} else {
		  localStorage.username = "";
		  localStorage.checkbox = "";
		}
	  }



	//  useEffect (() => {
	// 	if(store.token && store.token !== "" && store.token !== undefined){
	// 	navigate('/account')
	// 	}

	//  },[store.token])



	return (

		<div className="text-center content-container">
			<h1 className="mt-5">Sign in </h1>
			

			<form className="container col-md-5 p-4 bg-light mb-5 loginForm" onSubmit={(e) => submit(e)}>
				<div className="form-group ">
					<label for="userName">Username</label>
					<input type="text" className="form-control" id="userName" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input>
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
				
				<button type="submit" className="btn btn-success mt-2">Sign in</button>

				<div className="mt-2">
					<Link to={'/register'} style={{color: 'blue'}}>
						New User? Create Account Here
					</Link>
				</div>
			</form>


		</div>
	);
}
