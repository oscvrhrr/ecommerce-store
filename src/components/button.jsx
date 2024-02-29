/* eslint-disable react/prop-types */
import '../sass/button.scss'

function Button({buttonType, label}) {


return (
    <>
        <button className={buttonType} >
            {label}
        </button>
    </>
)
        
       
}



export default Button;