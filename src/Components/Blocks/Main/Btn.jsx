import React from 'react'

function Btn(props) {
    return (
        <button className={props.class_btn} type='button'>{props.title}</button>
    )
}

export default Btn
