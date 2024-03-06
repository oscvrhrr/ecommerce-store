/* eslint-disable react/prop-types */
import '../sass/product-left-link.scss';
import Button from './button';



function ProductLinkLeft({title, desc, img}) {
    return (
        <>
            <article className='component-product-left-link'>
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

export default ProductLinkLeft;