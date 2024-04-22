import '../sass/Footer.scss'
import Logo from '../../public/audio-store-assets/shared/desktop/logo.svg'



function Footer() {
    const socials = {
        facebook: '../../audio-store-assets/shared/desktop/icon-facebook.svg',
        twitter: '../../audio-store-assets/shared/desktop/icon-twitter.svg',
        instagram: '../../audio-store-assets/shared/desktop/icon-instagram.svg'
    }
    return (
        <footer>
            <div className='footer-content'>
                <img src={Logo} alt="" />
                <p>Audiophile is an all in one stop to fulfill your audio needs. We&#x60;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <p>Copyright 2021. All Rights Reserved</p>
            </div>
            <ul>
                <li>Home</li>
                <li>Headphones</li>
                <li>Speakers</li>
                <li>Earphones</li>
                <div className='block-socials'>
                    <img src={socials.facebook} alt="facebook icon" />
                    <img src={socials.twitter} alt="twitter icon" />
                    <img src={socials.instagram} alt="instagram icon" />
                </div>
            </ul>
        </footer>
    )
}


export default Footer;