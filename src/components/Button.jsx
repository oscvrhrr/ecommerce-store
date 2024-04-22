/* eslint-disable react/prop-types */
import "../sass/Button.scss";



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
