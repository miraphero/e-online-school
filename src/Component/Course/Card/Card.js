import React from 'react';

const Card = (props) => {
    const {name, email, price, img} = props.cart;
    

    return (
        <div>
            <div className="shadow-sm p-3 mb-5 bg-white rounded card mb-3" style={{width:"80%", margin:'0 auto'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={img} className="card-img" style={{width:"250px"}} alt="img"></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body" style={{marginLeft:"105px"}}>
                        <h5 className="card-title" style={{fontSize:"20px"}}>{name}</h5>
                        <p className="card-text">price : ${price}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;