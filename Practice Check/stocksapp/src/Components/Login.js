import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import MenuComponent from './MenuComponent'

export class Login extends Component{
   constructor(){
       super();
       this.state={
           email:'',
           password:''
       }
       this.handleSubmit=this.handleSubmit.bind(this)
   }

    handleSubmit() {
        this.props.history.push('/');
    }

   handleChange(e){
       this.setState({[e.target.name]:e.target.value});
   }
    
   render(){
        
        return(
            <div>
                <h2>Let's get started by Login</h2>
                <h4>Fields marked with * are mandatory</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' value={this.state.mail} onChange={this.handleChange.bind(this)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' value={this.state.password} onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}