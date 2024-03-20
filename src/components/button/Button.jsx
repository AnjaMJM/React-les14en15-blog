import "./button.css"

function Button({btnType, btnName, handleClick}) {
    return (
        <button className="btn-basic" type={btnType} onClick={handleClick}>{btnName}</button>
    );
}

export default Button;