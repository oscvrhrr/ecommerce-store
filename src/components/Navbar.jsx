/* eslint-disable react/prop-types */
import '../sass/Navbar.scss'
// import Logo from '../starter-code/assets/shared/desktop/logo.svg'
// import CartIcon from '../starter-code/assets/shared/desktop/icon-cart.svg'
import Logo from '../../public/audio-store-assets/shared/desktop/logo.svg'
import CartImage from '../../public/audio-store-assets/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useState } from 'react'




function Navbar({className, background}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCart = () => {
        setIsOpen(prevState => !prevState )
    }

   
    
    
  

    return (
        <>
            <nav className={className}>
                <div className="navcontent" style={{backgroundColor:background}} >
                    <img src={Logo} alt="an image of the company logo" />
                    <ul className='nav-menu'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/headphones'>Headphones</Link>
                        <Link className='link' to='/speakers'>Speakers</Link>
                        <Link className='link' to='/earphones'>Earphones</Link>
                    </ul>
                    <img className='cart--hover' src={CartImage} alt="an icon of a shopping cart" onClick={handleCart}/>
                    { isOpen && <Cart/> }


                </div>

            </nav>
        </>


    )
    
}

export default Navbar ;