import React from 'react'
import { ListGroup } from "react-bootstrap";
import './app-list.styles.scss'

const AppList=(props)=>{
    const {children}=props

    return(<ListGroup>{children}</ListGroup>)

}

export default AppList