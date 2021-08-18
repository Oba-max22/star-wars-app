import React from "react";
import "../styles/NavBar.css";
const NavBar = ({ currentPage }) => {

    return (
        <div className="header">
            <h3 className="title">{currentPage}</h3>
            <ul>
                <li><span><i class='bx bx-chat'></i></span></li>
                <li><span><i class='bx bx-bell'></i></span></li>
                <li><img src="./images/images.png" alt="N within a black circle" className='n-img' width='60' height='60'/></li>
            </ul>
        </div>
    );
};

export default NavBar;