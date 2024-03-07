/* eslint-disable react/prop-types */
import '../sass/product-details.scss'



function Features({paraOne,paraTwo,item,quantity}) {
    const items = Array.isArray(item) ? item : [];
    return (
        <>
            <div className="component-features">
                <div className='component-features--content'>
                    <h3>Features</h3>
                    <p>{paraOne}</p>
                    <p>{paraTwo}</p>
                </div>
                <div className='component-box--content'>
                    <h3>In The Box</h3>
                    <ul>
                        {items.map((item,index) => (
                            <li key={index}>{quantity}X {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Features;