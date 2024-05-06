/* eslint-disable react/prop-types */
import '../sass/ProductLeftLink.scss';
import Button from './Button';
import { Link } from 'react-router-dom';

function ProductLinkLeft({title, desc, img, path, tabImg, mobImg}) {
    return (
        <>
            <article className='component-product-left-link'>
                <img 
                 srcSet={`${mobImg} 654w, ${tabImg} 1378w, ${img} `}
                 src={img}
                 alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Link to={path}>
                        <Button buttonType="primary-button" label="See Product" />
                    </Link>
                </div>
            </article>
        </>
    )
}

export default ProductLinkLeft;