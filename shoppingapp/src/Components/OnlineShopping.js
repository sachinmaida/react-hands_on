import React, { Component } from 'react'
import Cart from './Cart'
import '../stylesheets/mystyle.css'

class OnlineShopping extends Component{
     
                render(){
                 const CartInfo=[{itemname:"Laptop",price:"99000"},
                    {itemname:"Tv",price:"10002"},
                    {itemname:"Washing Machine",price:"10298"},
                    {itemname:"Refigerator",price:"10293"}
                ];
                    return (
                        <div >
                            <h1>Items Ordered:</h1>
                            <div className="myDiv">
                            <Cart info={CartInfo}/>
                            </div>
                        </div>
                    );
                }
                
}

export default OnlineShopping;