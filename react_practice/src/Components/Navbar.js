import { Link } from "react-router-dom"
import { useContext } from "react"
import {UserContext} from "../App"

const Navbar = () => {
    const {userName} = useContext(UserContext)
    return (
        <nav >
            <div >
                <h2> {userName}</h2>
                <Link style={{ margin: "10px" }} to="/useImperativeHandle">useImperativeHandle</Link>
                <Link style={{ margin: "10px" }} to="/useMemo">
                    UseMemo
                </Link>
                <Link style={{ margin: "10px" }} to="/login">
                    Login
                </Link>
            </div>
        </nav>
    )

}

export default Navbar