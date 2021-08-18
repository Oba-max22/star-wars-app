import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/SideBar.css";
import { useHistory } from "react-router-dom";



const SideBar = ({ menuItems }) => {

    const history = useHistory()

    const goToHome = (e)=> {
        history.push('/dashboard')
    }

    return (
        <div className="sidebar-wrapper">
            <img src="./images/logo.png" alt="logo" className='logo-img' onClick={goToHome}/>
            <div className="menu-wrapper">
            {menuItems.map((menuItem, index) => (
                <NavLink
                className={`nav-link sidebar-links`}
                to={menuItem.path}
                key={index}
                exact={menuItem.exact}
                activeStyle={{
                    color: "#FDDB00",
                    // background: "#ED165F",
                    borderRadius: "0 50px 50px 0",
                }}
                >
                <i className={`${menuItem.icon} nav-link-icon`}></i>
                <span className="nav-link-text">{menuItem.name}</span>
                </NavLink>
            ))}
            </div>
    
        </div>
    );
};

export default withRouter(SideBar);