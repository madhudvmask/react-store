import React from 'react'
import ButtonContainer from './../button'

export default function CartItem({item,value}) {

    const { id, productName, imageUrl , price, total, count} = item;
    
    //const{id, title, img, price, total, count} = item;
    
    const {increment,decrement,removeItem} = value;
    
    
    
    // console.log({img});
    return (
        <div className="row text-capitaize text-center my-1">
            <div className="mx-auto col-10 col-lg-2">
                <img src={imageUrl} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product" />
                
                {/*     {title} */}
            </div>
            <div className="mx-auto col-10 col-lg-2">
                <span className="d-lg-none">Product :</span>
                {productName}
            </div>
            <div className="mx-auto col-10 col-lg-2">
             $ {price}
            </div>
            <div className="my-lg-0 my-2 mx-auto col-10 col-lg-2">
               <div className="d-flex justify-content-center">
                   <div>
                        <span className="btn bt-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn bt-black mx-1" onClick={() => decrement(id)}>{count}</span>
                        <span className="btn bt-black mx-1" onClick={() => increment(id)}>+</span>
                   </div>
               </div>               
            </div>
            <div className="mx-auto col-10 col-lg-2">
                <ButtonContainer cart onClick={() => removeItem(id)}>
                    <span>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </ButtonContainer>
                
            </div>
            <div className="mx-auto col-10 col-lg-2">
                <strong>item total : ${total}</strong>
            </div>
        </div>
    )
}
