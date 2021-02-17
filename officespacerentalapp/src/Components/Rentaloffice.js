import React, { Component } from 'react';
import of from '../of.jpg';
import '../mystyle/mystyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const image=<img src={of} width="25%" height="25%"/>
const headline=<h1>Office Space at affordable Range</h1>

const offices=[{Name:"DBS",Rent:5000,Address:"Chennai"},
                {Name:"KFC",Rent:10000,Address:"Chennai"},
                {Name:"MD",Rent:50000,Address:"Chennai"},
                {Name:"CSB",Rent:4500,Address:"Chennai"}]

const officeDetails={Name:"DBS",Rent:5000,Address:"Chennai"}
class Rentaloffice extends Component{
    render(){
        return(
            <div>
                {headline}
                {image}
                {
                    offices.map((item)=>{
                        return (
                            <div className='div'>
                                <h1>Name:{item.Name}</h1>
                                {
                                    
                                }
                                <h3 style={{backgroundColor:'red',display:'inline',marginLeft:'0.1%'}}>Rent:{item.Rent}</h3>
                                <h3>Address:{item.Address}</h3>
                                <br/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Rentaloffice;