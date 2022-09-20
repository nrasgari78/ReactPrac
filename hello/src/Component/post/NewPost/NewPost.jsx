import React, { useState} from "react";
import axios from "../../../axios"
import {Navigate} from "react-router-dom"
const NewPost=()=>{
    const [newpoststate,setnewpoststate]=useState({
        title:'',
        body:'',
        Author:'',
        submited:false

    })
   const PostHandler=()=>{
       const body={
           title:newpoststate.title,
           body:newpoststate.body,
           Author:newpoststate.Author

       }
        axios.post('/posts',body).then((res)=>{
            console.log(res)
            setnewpoststate({submited: true})

        })
    }
    let redirect:null
    if(newpoststate.submited) {
        redirect = <Navigate to="/submited"/>
    }
    return(
        <div>
            {redirect}
            <h1>Add New Post</h1>
            <label>title</label>
            <input type="text" onChange={(event)=>setnewpoststate({title:event.target.value})}/>
            <button onClick={PostHandler}>Add</button>
        </div>
    )
}
export default NewPost
