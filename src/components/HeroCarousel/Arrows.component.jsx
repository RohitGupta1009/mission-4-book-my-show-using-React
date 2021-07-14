import React from 'react'

export const NextArrow = (props) => {                                    // const {className,style,onclick}=props    -> This will be passed through react slick
    return (
        <div className={props.className}
        style={{...props.style, backgroundColor:'black'}}               // it's inline style so we have to give everything as js object
        onClick={props.onClick} />
          
    )
}

export const PrevArrow = (props) => {
    return (
        <div className={props.className}
        style={{...props.style, backgroundColor:'black'}}               // it's inline style so we have to give everything as js object
        onClick={props.onClick}/>
        
    )
}
