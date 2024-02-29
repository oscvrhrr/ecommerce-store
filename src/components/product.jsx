/* eslint-disable react/prop-types */



function Product({name,img}) {
    const arrow = '../../audio-store-assets/shared/desktop/icon-arrow-right.svg'
    return (
        <div className="container-product">
            <div className="product">
                <img src={img} alt="an image of the product" />
                <h6>{name}</h6>
                <p>Shop
                    <img src={arrow}/>
                </p>
            </div>
        </div>

    )
}


export default Product