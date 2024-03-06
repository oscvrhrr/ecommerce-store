/* eslint-disable react/prop-types */
import '../sass/product-left-link.scss';
import Button from './button';



function ProductLinkRight({title, desc, img}) {
    return (
        <>
            <article className='component-product-right-link'>
                <img src={img} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Button buttonType="primary-button" label="See Product" />
                </div>
            </article>
        </>
    )
}

export default ProductLinkRight;