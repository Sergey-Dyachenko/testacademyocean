import React from "react";
import { Jumbotron, Button, Form, FormGroup} from 'reactstrap';
import ReactDOM from 'react-dom';
import Settings from "./Settings";

export default class Step2 extends React.Component {

    constructor (props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {

    }

    handleSubmit(e)
    {
        e.preventDefault();
        const email = new FormData();
        email.append('email', localStorage.getItem('email'));
        console.log(email);
        let uri = Settings.url+'/api/step2';
        axios.post(uri, email, {
        }).then(res => {
            console.log(res.statusText)
        })
        this.props.history.push('/step3');
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Jumbotron>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    </Jumbotron>
                    <Button>Next</Button>
                </FormGroup>
            </Form>

        )
    }
}
