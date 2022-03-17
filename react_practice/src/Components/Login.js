import React, { useContext, useState } from "react"
import {UserContext} from "../App"

const Login = (props) => {
    const {setUserName} = useContext(UserContext)
    return (
        <div>
            <span>User Name</span>
            <input onChange={(e)=>{
                setUserName(e.target.value)
            }} />
        </div>
    )
}


export default Login