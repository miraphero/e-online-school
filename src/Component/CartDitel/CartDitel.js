import React from 'react';

const CartDitel = (props) => {
    const cart = props.cartDitel;
    const total = cart.reduce( (total,produc) => total + Number(produc.price) , 0)
    
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if (total > 0){
        shipping = 12.99
    }
    return (
        <div>
            <div className="card text-center" style={{width:'80%', margin:'0 auto'}}>
                        <div className="card-header">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Total Price: ${total + shipping}</h5>
                            <p className="card-text font-weight-bold">Items Ordered : {props.cartDitel.length}</p>
                            <p className="font-weight-bold">Shipping Cost:${shipping}</p>
                        </div>
                        <div className="card-footer text-muted">
                            your Courses
                        </div>
            </div>
        </div>
    );
};

export default CartDitel;