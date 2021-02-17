import React, { Component } from 'react'
import {Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText} from 'reactstrap'
import {isLogin} from './MenuComponent'

export var watchlist=[];

export class Companies extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    watchlist=[];
    Companies=[{Name:'Cognizant',Price:500,Description:"Cognizant is an American multinational technology company that provides business consulting, information technology and outsourcing services. It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades"},
                {Name:'Wipro',Price:700,Description:"Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It is headquartered in Bangalore, Karnataka, India. In 2013, Wipro separated its non-IT businesses and formed the privately owned Wipro Enterprises"},
            {Name:'Hewlett',Price:1000,Description:"The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, (/ˈhjuːlɪt ˈpækərd/ HEW-lit PAK-ərd), was an American multinational information technology company headquartered in Palo Alto, California, that developed and provided a wide variety of hardware components, as well as software and related services"}]
        
        handleSubmit(Company){
           watchlist.push(Company);
            alert(Company.Name+" Added to watchlist");
        }
        render(){
        let button;
        if(isLogin){
            return(
                <div>
                    {
                        this.Companies.map((Company)=>{
                            return(
                                <Card>
                                    <CardHeader>{Company.Name}</CardHeader>
                                    <CardBody>
                                        <CardText>{Company.Description}</CardText>
                                    </CardBody>
                                    <CardFooter>Today's Price: ${Company.Price} <Button onClick={()=> this.handleSubmit(Company)}>Watch</Button></CardFooter>
                                </Card>
                            );
                        })
                    }
                    
                </div>
            );
        }
        else
        {
            return(
                <div>
                    {
                        this.Companies.map((Company)=>{
                            return(
                                <Card>
                                    <CardHeader>{Company.Name}</CardHeader>
                                    <CardBody>
                                        <CardText>{Company.Description}</CardText>
                                    </CardBody>
                                    <CardFooter>Today's Price: ${Company.Price}</CardFooter>
                                </Card>
                            );
                        })
                    }
                    
                </div>
            );
        }
    }
}