import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const state = useSelector((state)=>state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Momentum Solutions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact
                                </NavLink>
                            </li>


                        </ul>

                        <div className="buttons">
                            <NavLink to="" className="btn">
                                Search
                            </NavLink>

                            <NavLink to="/login" className="btn ms-2">
                                <i className="fa fa-user me-1 fa-2x"></i>
                            </NavLink>

                            <NavLink to="/cart" className="btn  ms-2">
                                <i className="fa fa-shopping-cart me-1 fa-2x"></i> ({state.length})
                            </NavLink>
                        </div>

                    </div>
                </div>
            </nav>



        </div>
    )
}

export default NavBar;
