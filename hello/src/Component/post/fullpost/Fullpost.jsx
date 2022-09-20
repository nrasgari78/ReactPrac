import React, {useEffect, useState} from "react";
import axios from "../../../axios"
import {useParams} from "react-router-dom"

const Fullpost=(props)=>{
 const { id } = useParams()
 const   [fullpost,setfullpost]=useState([])
    useEffect(()=>{
        console.log(id)
        if(id) {
            if(!fullpost || (fullpost && fullpost.id!==id))
            axios.get('/posts/' + id).then((res) => {
                setfullpost(res.data)
            })
        }
        })
const DeleteHandler=()=>{
            axios.delete('/posts/' + id).then((res) => {
                console.log(res)
            })

}

    // if(props.id) return (<p>Loading....</p>)
    if(fullpost.body)
    return (

    <div style={{border:"1px solid red"}}>
        <h3> {fullpost.body}</h3>
        <p style={{color:"red"}} onClick={DeleteHandler}>delete</p>
    </div>
    )
}
export default Fullpost
