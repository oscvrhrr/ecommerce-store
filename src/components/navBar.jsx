import '../sass/navbar.scss'
// import Logo from '../starter-code/assets/shared/desktop/logo.svg'
// import CartIcon from '../starter-code/assets/shared/desktop/icon-cart.svg'
import Logo from '../../public/audio-store-assets/shared/desktop/logo.svg'
import Cart from '../../public/audio-store-assets/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom'
function NavBar() {

    return (
        <>
            <nav>
                <div className="nav-container">
                    <img src={Logo} alt="an image of the company logo" />
                    <ul className='nav-menu'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/headphones'>Headphones</Link>
                        <Link className='link' to='/speakers'>Speakers</Link>
                        <Link className='link' to='/earphones'>Earphones</Link>
                    </ul>
                    <img src={Cart} alt="an icon of a shopping cart" />
                    

                </div>

            </nav>
        </>


    )
    
}

export default NavBar ;