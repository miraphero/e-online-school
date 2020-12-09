import React from 'react';


const Product = (props) => {

    const {name, email, price, img} = props.product;
    return (
        <div>
            <div className="shadow p-3 mb-5 bg-white rounded card mb-3" style={{maxWidth:"720px" }}>
                <div className="row no-gutters" style={{display:'flex'}}>
                    <div className="col-md-4">
                    <img src={img} className="card-img" style={{width:"340px"}} alt="img"></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body" style={{marginLeft:"130px"}}>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <button onClick={() => props.handleClick(props.product)} className="btn btn-primary">Enroll now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;