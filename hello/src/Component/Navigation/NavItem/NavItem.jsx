import React from "react";
const NavItem=(props)=>{
    return(
        <ul style={{listStyle:"none",display:"flex"}}>
        <li >{props.menu1}</li>
        <li>{props.menu2}</li>
    </ul>)

}
export default NavItem
