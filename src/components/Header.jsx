/* eslint-disable react/prop-types */
import Navbar from "./Navbar"




function Header ({pageTitle}) {
    return (
        <>
            <div className="header">
                <Navbar className="nav-container" />
                <h2>{pageTitle}</h2>
            </div>
        </>
    )
}

export default Header