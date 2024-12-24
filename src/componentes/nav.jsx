import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const style1 = ({ isActive }) => {
    return {
      color: isActive ? "#0000927e" : "#000092",
      textDecoration: "none",
      fontSize: "20px",
      fontWeight: "bold",
    };
  };
  return (
    // <ul className='nav'>
    //     <Link to='/'>Home</Link>
    //     <Link to='/product'>Product</Link>
    //     <Link to='/contact'>Contact</Link>
    //     <Link to='/footer'>Footer</Link>
    // </ul>

    <ul className="nav">
      <NavLink to="/" style={style1}>
        Home
      </NavLink>
      <NavLink to="/products" style={style1}>
        Products
      </NavLink>
      <NavLink to="/contact" style={style1}>
        Contact
      </NavLink>
      <NavLink to="/goback" style={style1}>
        Goback
      </NavLink>
      <NavLink to="/footer" style={style1}>
        Footer
      </NavLink>
      <NavLink to="/students" style={style1}>
        Students
      </NavLink>
      <NavLink to="/student" style={style1}>
        Student
      </NavLink>
    </ul>
  );
};

export default Nav;
