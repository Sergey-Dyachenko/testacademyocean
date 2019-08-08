import React from "react";
import { Jumbotron, Button, Form, FormGroup} from 'reactstrap';
import Settings from "./Settings";

export default class Step3 extends React.Component{
    constructor (props){
        super(props);
        this.state = { random1: 0, random2: 0, result: 0};
        this.state.random1 =  Math.round(Math.random()*100);
        this.state.random2 =  Math.round(Math.random()*100);
        this.handleResult = this.handleResult.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleResult(e){
        this.setState({
            result: e.target.value

        })
    }

    handleSubmit(e){
        e.preventDefault();
        let sum = this.state.random1 + this.state.random2;
        sum = parseInt(sum, 10);
        let result = parseInt(this.state.result, 10);
        let flag = '';
        if (sum == result)
        {
            flag = 1;
        }
        else
        {
            flag = 0
        }
        console.log(flag);
        const data = new FormData();
        data.append('result', flag );
        data.append('email', localStorage.getItem('email'));
        console.log(data);
        let uri = Settings.url+'/api/step3';
        axios.post(uri, data, {
        }).then(res => {
            console.log(res.statusText)
        })
        this.props.history.push('/step4');
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <p>Please solve task!</p>
            <div>
                <input type="text" disabled defaultValue={this.state.random1 + ' + ' + this.state.random2}/>
            </div>
                <p>Please input you answer under!</p>
                <div>
                <input type="text" onChange={this.handleResult}/>
            </div>
            <Button>Next</Button>
            </Form>
        )
    }

}
