import React from 'react'

const ErrorField=(props)=>{
    const {message}=props
     
    return <p style={errorStyles}>{message}</p>
}

const errorStyles={
    fontSize: '12px',
    color: 'red',
    padding: '2px',
}

export default ErrorField