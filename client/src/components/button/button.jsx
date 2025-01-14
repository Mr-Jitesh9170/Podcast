import React from 'react'
import "./button.scss"
export const Button = ({ name, btnClick, btnName }) => {
    return (
        <button className="button-19" name={btnName} onClick={btnClick}  >{name}</button>
    )
}

