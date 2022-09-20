import React from "react";
import NavItem from "../NavItem/NavItem";
import {Link} from 'react-router-dom'
const Navbar=(props)=>{

    return(
        <div>
        <header>
            <ul style={{listStyle:"none",display:"flex"}}>
                <li  style={{margin:'5px',color:"purple"}} >
                    <span><a href="/">Home</a></span>
                    <span><Link to="/test">test</Link></span>
                </li>
            {
            props.data.map((item)=>{
       return(

           <li key={item.index} style={{margin:'5px',color:"purple"}} >
            <Link to={{
              pathname: "/"+item.title,
              search:'no.'+item.index
            }}>
            <NavItem menu1={item.title}/>
               </Link>
           </li>
       )
            })}
            </ul>
        </header>
        </div>
    )
}
export default Navbar
