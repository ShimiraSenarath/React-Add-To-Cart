import './Button.css'
import React from 'react'

const Button = (props) => {
    let {text, onClick} = props
    let btnType = `btn btn-${props.color}`;

    return (
        <input type="button" className={btnType} value={text} onClick={onClick}/>
    );
}

export default Button;