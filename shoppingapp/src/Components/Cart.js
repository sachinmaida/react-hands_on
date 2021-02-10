import React from 'react'

const Cart=(item)=>{
    return (
        <div>
                <tr>
                    <td>{item.itemname}</td>
                    <td>{item.price}</td>
                </tr>
        </div>
    );
};

export default Cart;