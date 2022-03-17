import React,{useEffect,useMemo, useState} from "react";
import axios from "axios"

const UseMemo = (props) =>{
    const [comments, setComments] = useState([])
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            setComments(res.data)
        })
    },[])
    const findLongestName = (comments) =>{
        if(!comments) return null
        let longest = ""
        for(let i =0 ;i<comments.length;i++){
            if(longest.length<comments[i].name.length ){
                longest = comments[i].name
            }
        }
        console.log("THIS IS COMPUTED ")
        return longest
    }
    const getLongestName = useMemo(()=>findLongestName(comments),[comments])
    return (
       <React.Fragment>
            <div>It will avoid unnecessary computation </div>
        <div> 
            <span>longest author name : {getLongestName} </span>
            <span>Count : {counter} </span>
            <button onClick={()=>{setCounter(counter + 1) }}>Increament </button>
        </div>
       </React.Fragment>

    )
}


export default UseMemo