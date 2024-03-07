/* eslint-disable react/prop-types */
import '../sass/product-left-link.scss';
import Button from './button';
import { Link } from 'react-router-dom';


function ProductLinkRight({title, desc, img, path}) {
    return (
        <>
            <article className='component-product-right-link'>
                <img src={img} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Link to={path}>
                        <Button buttonType="primary-button" label="See Product" path={path} />
                    </Link>
                </div>
            </article>
        </>
    )
}

export default ProductLinkRight;