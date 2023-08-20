import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";




export const Home = () => {





    return(

        <div className="text-center mt-5 d-inline justify-content-center container">
            <h1>Please Login</h1>
            <div>
            <Link to="/login">
                <button>Click</button>
            </Link>
            </div>
        </div>
    )
}