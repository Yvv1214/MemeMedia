import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState('')
	const [ lastName, setLastName] = useState('')
	const [email, setEamil] = useState('')
	const [ password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
 	const [phone, setPhone] = useState('')
	const token = localStorage.getItem('token')
	console.log('your token', token)

	const createUser = () => {

		if(password !== password2){
			alert('passwords must match')
			return false
		}
		

		console.log(firstName, lastName, email, password, phone)
	}






	return (
		<div className="text-center mt-5 d-inline justify-content-center">
			<h1>Create New User</h1>
            <h6>Please fill in the required fields</h6>

			<form className="row col-6 p-4 bg-info d-flex justify-content-around mx-auto rounded">
			<div className="col-6">
                <div className="form-group mt-2">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </div>

                <div className="form-group mt-2">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </div>

				<div className="form-group mt-2">
					<label for="exampleEmail">Email address</label>
					<input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com" value={email} onChange={e => setEamil(e.target.value)}></input>
				</div>
			</div>

			<div className="col-6">
			<div className="form-group mt-2">
				<label for="passwordInput">Password</label>
				<input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
			</div>

            <div className="form-group mt-2">
				<label for="passwordInput2">Re-enter Password</label>
				<input type="password" className="form-control" id="passwordInput2" placeholder="Re-enter Password" value={password2} onChange={e => setPassword2(e.target.value)}></input>
			</div>

			<div className="form-group mt-2">
				<label for="phone">Phone Number</label>
				<input type="tel" className="form-control" id="phone" maxLength="10" placeholder="000-000-0000" value={phone} onChange={e => setPhone(e.target.value)}></input>
			</div>
			</div>

			<div>
			<button type="submit" className="btn btn-primary mt-4" onSubmit={createUser}>Create Account</button>
			</div>

			<div className="mt-2">
				<Link to={'./'}>
				<a href="#">Return Home</a>
				</Link>
			</div>

			</form> 
			

		</div>
	);
};