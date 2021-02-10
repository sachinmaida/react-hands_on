import React from 'react'
import Cart from './Cart'

const OnlineShopping=()=>{
    const CartInfo=[{itemname:"Laptop",price:"99000"},
                    {itemname:"Tv",price:"10002"},
                    {itemname:"Washing Machine",price:"10298"},
                    {itemname:"Refigerator",price:"10293"}
                ];
    return (
    
        <div className="myDiv">
            <h1>Items Ordered:</h1>
            { 
                CartInfo.map((figure, key) => {
                return <Cart key={key} {...figure}/>
            })
            }
        </div>
    );
}

export default OnlineShopping;