import React from 'react';
import { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Product from '../Product/Product';
import Card from './Card/Card';
import CartDitel from '../CartDitel/CartDitel';

const Course = () => {
    const [Course, setCourse] = useState(FakeData);
    
    const [Cart, setCart] = useState([])
    const handleClick = (car) =>{
        const newCart = [...Cart, car];
        setCart(newCart);
    }

    return (
        <div style={{marginTop:"7%", display: "flex"}}>
            <div style={{width:'60%', borderRight:'2px solid black'}}>
                {
                    Course.map(course => <Product key={course.id} handleClick={handleClick} product={course}> </Product>)
                }
            </div>
            <div style={{marginRight: '0px',width:'45%', margin:'0 auto'}}>
                   
                <CartDitel cartDitel={Cart}></CartDitel>)

                {
                    Cart.map(cart => <Card cart={cart}></Card>)
                }
            </div>
        </div>
    );
};

export default Course;