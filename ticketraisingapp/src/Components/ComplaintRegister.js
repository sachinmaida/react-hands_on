import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

export class ComplaintRegister extends Component{
    constructor(){
        super();
        this.state={
            emp_name:'sachin',
            complaint:''
        }
        this.handleclick=this.handleclick.bind(this);
        this.handlebutton=this.handlebutton.bind(this);
    }

    handleclick(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handlebutton(){
        alert("Thanks: "+this.state.emp_name+"\n Your complaint was submitted"+"\nComplaint No.: "+Math.ceil(Math.random()*100));
    }
    
    render(){
        return(
            <div>
                <h2>Register your complaints here!!!</h2>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type='textarea' name='emp_name' value={this.state.emp_name} onChange={this.handleclick}/>
                        </Col>  
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Complaint</Label>
                        <Col sm={10}>
                            <Input type='textarea' name='complaint' value={this.state.complaint} onChange={this.handleclick}/>
                        </Col>
                        
                    </FormGroup>
                    <Button onClick={this.handlebutton}>Submit</Button>
                </Form>
            </div>
        );
    }
}

