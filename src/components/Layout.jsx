import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
    <div>
        <Link to="/">Home</Link>
        <Link to="/things-to-do">Things to do</Link>Home
        <Outlet/>
        </div>
    )
}