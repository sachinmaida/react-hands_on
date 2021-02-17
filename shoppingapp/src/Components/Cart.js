import React, { Component } from 'react'

class Cart extends Component{
    render(){
    return (
        <div>
              <table border="1" className="center">
               <tbody>
               <tr>
                   <td>Name</td>
                   <td>Price</td>
               </tr>
               {
                   this.props.info.map((item)=>{
                    return (
                        <tr>
                            <td>{item.itemname}</td>
                            <td>{item.price}</td>
                         </tr>
                    );
                    }
                   )
               }   
                </tbody> 
               </table>           
        </div>
    );
   }
}

export default Cart;