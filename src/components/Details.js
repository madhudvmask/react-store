import React, { Component } from 'react'
import { ProductConsumer} from './../context'
import { Link } from 'react-router-dom'
import ButtonContainer from './button'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const { id, productName, company, description, imageUrl, price, inCart } = value.detailProduct;
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="my-5 text-center col-10 mx-auto text-slanted">
                                    <h1>{productName}</h1>
                                </div>
                                {/* Product Details */}
                                    <div className="row">
                                        <div className="col-4 mx-auto my-3">
                                            <img src={imageUrl} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="col-8 mx-auto my-3 text-capiyalize">
                                            <h3>Model : {productName}</h3>
                                            <h4>Made by : {company}</h4>
                                            <h4>Price : {price}</h4>
                                            <h4>Details</h4>
                                            <p className="mt-3 mb-0">
                                            {description}
                                            </p>
                                            {/* buttons */}
                                            <div className="mt-5">
                                                <Link to="/">
                                                    <ButtonContainer>
                                                        Back to Product
                                                    </ButtonContainer>
                                                </Link>
                                                <ButtonContainer 
                                                    cart
                                                    disabled={inCart?true:false} 
                                                        onClick={() => {
                                                        value.addtoCart(id); 
                                                        value.openModal(id);
                                                    }
                                                    }>
                                                        {inCart?'inCart': 'add to cart'}
                                                </ButtonContainer>
                                            </div>
                                        </div>
                                    </div>

                                {/* Product Details */}
                            </div>
                        </div>
                    )
                    console.log(value.detailProduct);
                }}
            </ProductConsumer>
        )
    }
}

// export default Details;