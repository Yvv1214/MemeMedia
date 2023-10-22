import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";




export const Home = () => {

    const [icon, setIcon] = useState(false)
    const [icon2, setIcon2] = useState(false)




    return(

        <div className="container">
            <h2 className="d-flex text-center">Looking for Memes?</h2>

            <div className="tagsDiv container border border-dark">  
            
            {/* this will be mapped */}

                <div className="card tagsCard col-lg-2 col-md-3">
                    {/* <Link to={'/meme.tag'} */}
                    <img src="..." className="card-img-top"/>
                    <div className="card-body text-center">
                        <p className="card-title fw-bold">Tag Name</p>
                        <p className="card-text">number of posts</p>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler homeFilter" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>

                        <li className="nav-item dropdown dropdown2">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown2
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>

                    <button onClick={() => setIcon(!icon)} style={{border: 'none', background: 'none'}}>
                        {icon == false ?
                        <i className="fas fa-th me-2" title="uniform"></i>
                        :
                        <i class="fas fa-teeth me-2" title="waterfall"></i> }
                    </button>

                    <button onClick={() => setIcon2(!icon2)} style={{border: 'none', background: 'none'}}>
                        {icon2 == false ? 
                        <i class="fas fa-play-circle" style={{color: 'green'}} title="autoplay"></i>
                        : 
                        <i class="fas fa-stop-circle" style={{color: 'red'}} title="Disable Autoplay"></i> }
                    </button>
                    </div>
                </div>
            </nav>

            <div className="MemesCatalog">
                mapping begins here
            </div>


        </div>
    )
}