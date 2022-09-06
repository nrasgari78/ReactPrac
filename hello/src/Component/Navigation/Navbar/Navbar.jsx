import React from "react";
import NavItem from "../NavItem/NavItem";
const Navbar=(props)=>{

    return(
        <header>
            <ul style={{listStyle:"none",display:"flex"}}>
            {
            props.data.map((item)=>{
       return(
           <li key={item.index}>
            <NavItem
                menu1={item.title}
            />
           </li>
       )
            })}
            </ul>
        </header>
    )
}
export default Navbar
