import React from "react";
const Post=(props)=>{

    return(
        <div>
      <p onClick={props.clickpost}>title:{props.title} </p>
      <p>Author:{props.author}</p>
        </div>
    )}
export default Post
