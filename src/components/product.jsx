/* eslint-disable react/prop-types */


function Product({name,img}) {
    return (
        <div className="container-product">
            <div className="product">
                <img src={img} alt="an image of the product" />
                <h6>{name}</h6>
                <p>Shop</p>
            </div>
        </div>

    )
}


export default Product