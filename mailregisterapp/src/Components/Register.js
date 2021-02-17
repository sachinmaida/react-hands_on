import React, { Component } from 'react'
import { Col, Form, FormGroup, Input, Label,Button } from 'reactstrap'

export class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            error:{}
        }
    }

    handleValidation(){
        let isValid=true;
        let errors=this.state.error;

        let inputname=this.state.name;
        if(!(typeof inputname!=='undefined' && inputname.length>4)){
            isValid=false;
            errors['name']='Length of name should be greater than 5';
        }

        let inputemail=this.state.email;
        if(!(typeof inputemail!=='undefined' && inputemail.lastIndexOf('@')>0)){
            isValid=false;
            errors['email']='email must contain @';
        }

        let inputpassword=this.state.password;
        if(!(typeof inputpassword!=='undefined' && inputpassword.length>0)){
            isValid=false;
            errors['password']='Password mustnot empty';
        }
        return isValid;
    }
    handleSubmit(){
        if(this.handleValidation()){
            alert("Form is Valid")
        }
        else
        {
            alert("Form has errors");
            if(this.state.error.name!='') alert(this.state.error.name);
            if(this.state.error.email!='') alert(this.state.error.email);
            if(this.state.error.password!='') alert(this.state.error.password);
        }
    }

    handleOnChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    

    render(){
        return(
            <div>
                <h1>Register here!!!</h1>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Name:</Label>
                        <Input type='text' name='name' value={this.state.name} onChange={this.handleOnChange.bind(this)}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Email:</Label>
                        <Input type='email' name='email' value={this.state.email} onChange={this.handleOnChange.bind(this)}/>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Password:</Label>
                        <Input type='password'name='password' value={this.state.password} onChange={this.handleOnChange.bind(this)}/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

            </div>
        );
    }
}