import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Settings from "./Settings";
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router";


export default class Step4 extends React.Component{
    constructor (props){
        super(props);
        this.state = {box1: false,  box2: false, box3: false, box4: false, active: false};
        this.handleChangeCheckbox1 = this.handleChangeCheckbox1.bind(this);
        this.handleChangeCheckbox2 = this.handleChangeCheckbox2.bind(this);
        this.handleChangeCheckbox3 = this.handleChangeCheckbox3.bind(this);
        this.handleChangeCheckbox4 = this.handleChangeCheckbox4.bind(this);
        this.handleChangeCheckbox4 = this.handleChangeCheckbox4.bind(this);
        this.handleChangeCheckbox5 = this.handleChangeCheckbox5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeCheckbox1(e){
        console.log(this.state.box1);
       if (this.state.box1)
       {
           this.setState({
               box1: false
           })
       }
       else {
           this.setState({
               box1: true
           })
       }
        console.log(this.state.box1);
    }


    handleChangeCheckbox2(e) {
        if (!this.state.active) {
            this.setState({
                active: true
            })
        }
        else {
            this.setState({
                active: false
            })
        }

        if (this.state.active) {
                this.setState({
                    box2: true
                })
            }
        }

    handleChangeCheckbox3(e){
        this.setState({
            box3: e.taget.value
        })
    }

    handleChangeCheckbox4(e){
        this.setState({
            box4: e.taget.value
        })
    }

    handleChangeCheckbox5(e){
        this.setState({
            box5: e.taget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.box1);
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <p>Какие языки программирования знаешь?</p>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" checked={this.state.box1} name="box1" id="box1"  onChange={this.handleChangeCheckbox1} /> PHP
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" name="box2" id="box2" onChange={this.handleChangeCheckbox2} /> Python
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" name="box3" id="box3" onChange={this.handleChangeCheckbox3} /> JS
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                <Label check>
                    <Input type="checkbox"  name="box4" id="box4" onChange={this.handleChangeCheckbox4} /> .net
                </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox"  name="box5" id="box5" onChange={this.handleChangeCheckbox5} /> Visual Basic
                    </Label>
                </FormGroup>
                <div>
                <Button>Next</Button>
                </div>
            </Form>
        )
    }

}
