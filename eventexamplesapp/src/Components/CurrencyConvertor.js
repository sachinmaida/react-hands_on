import React, { Component } from 'react'
import {FormGroup,Label,Input, Button} from 'reactstrap'

function calculate(){
    alert("Currency")
}
class CurrencyConvertor extends Component{
    constructor(){
        super();
        this.state={
            amount:0,
            currency:'Euro',
            TotalAmt:0
        };
        // this.handlechange=this.handlechange.bind(this);
        // this.handlesubmit=this.handlesubmit.bind(this);
    }

    CurrencyChangeMethod=()=>{

        var totalamt= this.state.amount*80;
        this.setState(
            {TotalAmt:totalamt}
        )
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handlesubmit(event){
        var msg = 'converting to ' +  this.state.currency + 'Amount is ' + this.state.TotalAmt;
        alert(msg);
        event.preventdefault();
    }

    render(){
        return(
            <div>
                <h1>Currency Convertor!!!</h1>
                <form onSubmit={()=>this.handlesubmit}>
                    <FormGroup>
                        <Label>Amount: </Label>
                        <Input type="number" name="amount" value={this.state.number} placeholder="Enter Amount" onChange={()=>this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Currency</Label>
                        <Input type="text" name="currency" value={this.state.currency} placeholder="Currency" onChange={()=>this.handleChange} />
                    </FormGroup>
                    <Button onClick={this.CurrencyChangeMethod} >Submit</Button>
                </form>
            </div>
        );
    }
}

export default CurrencyConvertor;