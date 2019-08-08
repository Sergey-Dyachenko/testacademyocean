import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultTable from './ResultTable';
import Settings from  './Settings';
//import
import Step2 from  './Step2';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router";
export default class Step1 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {emailInput: '',  avatarInput: null}
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }
    handleChangeEmail(e){
        this.setState({
            emailInput: e.target.value
        })
    }

    handleUploadFile(e){
        this.setState({
            avatarInput: e.target.files[0]
        })

    }

    handleSubmit(e){
        e.preventDefault();
        const user = new FormData();
        user.append('avatar', this.state.avatarInput);
        user.append('email', this.state.emailInput);
        console.log(user);
        let uri = Settings.url+'/api/step1';
        axios.post(uri, user, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res.statusText)
        });
        localStorage.setItem('email', this.state.emailInput);
        this.props.history.push('/step2')

    }

    render() {
        return (

                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.handleChangeEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Загрузить аватар:</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={this.handleUploadFile} />
                    </FormGroup>
                    <ResultTable/>
                    <Button>Next</Button>
                </Form>
        );
    }
}


