import '../sass/navbar.scss'
// import Logo from '../starter-code/assets/shared/desktop/logo.svg'
// import CartIcon from '../starter-code/assets/shared/desktop/icon-cart.svg'
import Logo from '../../public/audio-store-assets/shared/desktop/logo.svg'
import Cart from '../../public/audio-store-assets/shared/desktop/icon-cart.svg'

function NavBar() {

    return (
        <>
            <nav>
                <div className="nav-container">
                    <img src={Logo} alt="an image of the company logo" />
                    <ul className='nav-menu'>
                        <li>Home</li>
                        <li>Headphones</li>
                        <li>Speakers</li>
                        <li>Earphones</li>
                    </ul>
                    <img src={Cart} alt="an icon of a shopping cart" />
                    

                </div>

            </nav>
        </>


    )
    
}

export default NavBar ;