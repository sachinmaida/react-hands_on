import React, { Component } from 'react'
import {Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText} from 'reactstrap'
import {watchlist} from './Companies'

export class WatchList extends Component{
    render(){
        if(watchlist!==undefined){
        return(
            <div>
                <h1>WatchList</h1>
                {
                    watchlist.map((Company)=>{
                        return(
                            <Card>
                                    <CardHeader>{Company.Name}</CardHeader>
                                    <CardBody>
                                        <CardText>{Company.Description}</CardText>
                                    </CardBody>
                                    <CardFooter>Today's Price: ${Company.Price} </CardFooter>
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
                    <h1>WatchList</h1>
                    <p>No items added</p>
                </div>
            );
        }
    }
}