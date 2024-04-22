import '../sass/ProductSection.scss'
import Button from "./Button";
import { Link } from 'react-router-dom';

function MainSpeaker() {


    const images = {
        speaker: '../../audio-store-assets/home/desktop/image-speaker-zx9.png',
        rings: '../../audio-store-assets/home/desktop/pattern-circles.svg'
    }

    return (
        <section>
            <article className='main-speaker-component'>
                <img src={images.speaker} alt="an image of a speaker" />
                <div>
                    <h1>ZX9 SPEAKER</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sounds.</p>
                    <Link to="/product-zx9-speaker">
                        <Button label="see product" buttonType="secondary-button"/>
                    </Link>
                </div>
            </article>
        </section>
            

    )
}


export default MainSpeaker;