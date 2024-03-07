/* eslint-disable react/prop-types */
import '../sass/product-left-link.scss';
import Button from './button';
import { Link } from 'react-router-dom';


function ProductLinkLeft({title, desc, img, path}) {
    return (
        <>
            <article className='component-product-left-link'>
                <img src={img} alt="" />
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