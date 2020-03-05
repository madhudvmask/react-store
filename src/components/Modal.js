import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './../context';
import  ButtonContainer from './button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal} = value;
                    const { productName, imageUrl, price} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container" >
                                <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" id="modal">
                                        <h5>Item added to cart</h5>
                                        <img src={imageUrl} alt="product Image" className="img-fluid"/>
                                        <h5>{productName}</h5>
                                        <h6>Price $ :{ price }</h6>
                                        <Link to='/'>
                                                <ButtonContainer onClick={() => closeModal()}>
                                                Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                go to Cart
                                        </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.3);
    #modal{
        background: #fff;
    }
`;