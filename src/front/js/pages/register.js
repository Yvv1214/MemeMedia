import React from "react";
import { useState,useContext } from "react";
import { Context } from "../store/appContext";




export const Register = () => {
    const { store, actions } = useContext(Context);
    const [userName, setUserName] =useState('')
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


return(

    <div>
        <h1 className="text-center">Register</h1>

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
				<Link to='/login'>Back to Login</Link>
			</div>
			</form>
    </div>
)

}