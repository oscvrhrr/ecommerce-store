import '../sass/product-details.scss';



function QuantityField () {
    const quantity = 0
    return (
        <>
            <div className="component-quantity-field">
                <p>-</p>
                <p>{quantity}</p>
                <p>+</p>
            </div>
        </>
    )
}


export default QuantityField;