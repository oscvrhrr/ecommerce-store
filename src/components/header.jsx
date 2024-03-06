/* eslint-disable react/prop-types */
import NavBar from "./navBar"




function Header ({pageTitle}) {
    return (
        <>
            <div className="header">
                <NavBar/>
                <h2>{pageTitle}</h2>
            </div>
        </>
    )
}

export default Header