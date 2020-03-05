import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { ProductConsumer } from './../context'
import PropTypes from 'prop-types';



export default class Product extends Component {
    render() {
        const { id, productName, imageUrl , price, inCart} = this.props.product;
        return (
                           
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">

                    <div className="card">
                        <ProductConsumer> 
                            {(value) => (
                            <div className="imgContainer" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={imageUrl} className="card-img-top" alt="..." />
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} 
                                    onClick={() => {
                                        value.addtoCart(id);
                                        value.openModal(id);
                                    }                                   
                                    }>
                                    {inCart ? (
                                        <p className="text-capitalize mb-0">inCart</p>
                                    ) : (
                                            <i className="fas fa-cart-plus" />
                                        )

                                    }
                                </button>
                            </div> 
                            )}
                                       
                        </ProductConsumer>
                    {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                        <p className="card-title align-self-center mb-0">{productName} </p>
                        <h5 className="card-text text-blue font-italic mb-0">
                            <span className="mr-1">
                                $ {price}
                            </span>
                        </h5>
                        </div>
                </div>      
            </ProductWrapper>
        )
    }
}


Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        productName:PropTypes.string,
        imgUrl:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}


const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    border-color:transparent;
    background:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        border:0.04rem solid rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.imgContainer {
    position: relative;
    overflow: hidden;
    margin: 15px auto;
    text-align: center;
}
.card-img-top {
    transition:all 1s linear;
    width:70%;
}
.imgContainer:hover .card-img-top {
    transform: scale(1.2);
}
button.cart-btn {
    position: absolute;
    border: 0;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightblue);
    color: var(--mainwhite);
    font-size: 12px;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition:all 1s linear;
}
.imgContainer:hover button.cart-btn {
    transform: translate(0%, 0%);
}
button.cart-btn:hover {
    color: var(--lightblue);
    cursor:pointer;
}
`;