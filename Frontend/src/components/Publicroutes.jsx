import {Navigate,Outlet} from 'react'

function Publicroutes() {
    // const isAuthenticated = localStorage.getItem("token") !== null; // Check if the user is authenticated or not.localstorage is used to store the token of the user after login
    // return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />; // If the user is authenticated, return the Outlet component, else redirect the user to the Landing page
    return(
        <Outlet/>
    )
}

export default Publicroutes