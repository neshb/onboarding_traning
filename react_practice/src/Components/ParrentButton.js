import React ,{useRef} from "react";
import ChildButton from "../Components/ChildButton"

function ParrentButton (){
    const childButtonRef = useRef(null)

    return(
        <React.Fragment>
            <button onClick={()=>{ 
                childButtonRef.current.alterToggelFromParent()
            }} >parent button</button>
            <ChildButton ref={childButtonRef}/>
        </React.Fragment>
    )
}

export default ParrentButton