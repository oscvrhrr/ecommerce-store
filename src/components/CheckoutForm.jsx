import "../sass/CheckoutForm.scss"



export const CheckoutForm = () => {



    return (
       <form action="name" method="post" className="form">
        <h1>CHECKOUT</h1>
        <h2 className="form-h2">Billing Details</h2>
        <div className="form-box">
            <label htmlFor="name" >
                Name
                <input type="text" name="name" id="name" className="input-med" placeholder="Name" required/>
            </label>
           <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" className="input-med" placeholder="Email" required/>
           </label>
           <label htmlFor="phone-number">
                Phone Number
                <input type="text" name="phone-number" id="phone-number" className="input-med" placeholder="415-888-8888" required/>
           </label>
        </div>
        <h2 className="form-h2">Shipping Info</h2>
        <label htmlFor="address" className="form-address-label">
            Address
            <input type="text" name="address" id="address" placeholder="Address" className="form-address" required/>
        </label>
        <div className="form-box">
            <label htmlFor="zip-code">
                Zip Code
                <input type="text" name="zip-code" id="zip-code" className="input-med" placeholder="Zip code" required/>
            </label>
            <label htmlFor="city">
                City
                <input type="text" name="city" id="city" className="input-med" placeholder="City" required />
            </label>
            <label htmlFor="country">
                Country
                <input type="text" name="country" id="country" className="input-med" placeholder="Country" required />
            </label>
        </div>
       </form>
    );
};