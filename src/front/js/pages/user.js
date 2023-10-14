import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const User = () => {

    const {store, actions} = useContext(Context)
    const params = useParams()
    const navigate =useNavigate()

    // useEffect (() => {
    //     if(!store.token){
    //         navigate('/login')
    //     }
    // },[store.token])


    return(
        <div>
            <div>user page</div>

            <div>the pic</div>
        </div>
    )
}
