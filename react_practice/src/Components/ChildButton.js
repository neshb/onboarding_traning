import React ,{forwardRef,useImperativeHandle,useState} from "react";

const ChildButton = forwardRef((props,ref)=>{
    const [toggle,setToggle] = useState(false)

    useImperativeHandle(ref,()=>({
        alterToggelFromParent(){
            setToggle(!toggle)
        }
    }))

    const toggleHandler =()=>{
        setToggle(!toggle)
    }

    return(
        <React.Fragment>
            <button onClick={toggleHandler}>child button</button>
            {toggle && <div> hello from parent  </div>}
        </React.Fragment>
    )
})

export default ChildButton