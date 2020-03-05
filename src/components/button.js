import React, { Component } from 'react'
import styled from 'styled-components'



const ButtonContainer = styled.button`
padding: 0.2rem 0.4rem;
    background: transparent;
    text-transform: capitalize;
    color: var(--lightblue);
    font-size: 1.4rem;
    border-radius: 5px;
    border: 1px solid var(--lightblue);
    margin: 5px;
    border-color:${props => props.cart ? "var(--yellow)" : "var(--lightblue)"};
    color:${props => props.cart ? "var(--yellow)" : "var(--lightblue)"};
    &:focus{
        outline:none !important;
    }
`


export default ButtonContainer;