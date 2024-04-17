/* eslint-disable react/prop-types */
import "../sass/button.scss";



function Button({ buttonType, label, onClick}) {




  return (
    <>
      <button className={buttonType} onClick={onClick}>
        {label}
      </button>
    </>
  );
}

export default Button;
