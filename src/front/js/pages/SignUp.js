import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState('')
	const [email, setEamil] = useState('')
	const [ password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const navigate =  useNavigate()


	const createUser = () => {

		if(password !== password2){
			alert('passwords must match')
			return false
		}
		

		console.log(username, email, password)
	}





	return (
		<div className="text-center mt-5 d-inline justify-content-center">
			<h1 className="mt-3">Create New User</h1>

			<form className="row col-6 p-4 bg-info d-flex justify-content-around mx-auto rounded">

                <div className="form-group mt-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>

				<div className="form-group mt-2">
					<label for="exampleEmail">Email address</label>
					<input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com" value={email} onChange={e => setEamil(e.target.value)}></input>
				</div>

				<div className="form-group mt-2">
					<label for="passwordInput">Password</label>
					<input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
				</div>

				<div className="form-group mt-2">
					<label for="passwordInput2">Re-enter Password</label>
					<input type="password" className="form-control" id="passwordInput2" placeholder="Re-enter Password" value={password2} onChange={e => setPassword2(e.target.value)}></input>
				</div>

				<div>
					<button type="submit" 
					className="btn btn-success mt-4" 
					onSubmit={createUser}>
						Create Account
					</button>
				</div>

				<div className="mt-2">
					<button 
					className="btn btn-secondary" 
					onClick={() => navigate('/login')}>
						Go Back
					</button>
				</div>

			</form> 
			

		</div>
	);
};