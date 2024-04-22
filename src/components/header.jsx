/* eslint-disable react/prop-types */
import NavBar from "./NavBar"




function Header ({pageTitle}) {
    return (
        <>
            <div className="header">
                <NavBar className="nav-container" />
                <h2>{pageTitle}</h2>
            </div>
        </>
    )
}

export default Header