import "../sass/CheckoutForm.scss"



export const CheckoutForm = () => {



    return (
       <form action="name" method="post" className="form">
        <h1>Checkout</h1>
        <div className="form-box">
            <label htmlFor="name" >
                Name
                <input type="text" name="name" id="name" className="input-med" />
            </label>
           <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" className="input-med" />
           </label>
           <label htmlFor="phone-number">
                Phone Number
                <input type="text" name="phone-number" id="phone-number" className="input-med" />
           </label>
        </div>
        <div>
            <label htmlFor="address">
                Address
                <input type="text" name="address" id="address" />
            </label>
            <label htmlFor="zip-code">
                Zip Code
                <input type="text" name="zip-code" id="zip-code" />
            </label>
            <label htmlFor="city">
                City
                <input type="text" name="city" id="city" />
            </label>
            <label htmlFor="country">
                Country
                <input type="text" name="country" id="country" />
            </label>
        </div>
       </form>
    );
};