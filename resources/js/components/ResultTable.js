import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Link, browserHistory } from 'react-router';
import Settings from  './Settings';

class ResultTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            results : []
        }
    }

    componentDidMount(){
        fetch(Settings.url + '/api/result')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    results : results.data
                })
            })
            .catch(error => console.log(error))
    }

    renderResult(){
        let resultList = [];
        this.state.results.map(results=>{
            console.log(results);
            return resultList.push(
                <tr>
                <th scope="row">{results.id}</th>
                <td>{results.email}</td>
                <td>{results.points}</td>
                <td>{results.spenttime}</td>
            </tr>
            );
        })

        return resultList;
    }


    render(){
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Points</th>
                    <th>Spent time</th>
                </tr>
                </thead>
                <tbody>
                {this.renderResult()}
                </tbody>
            </Table>
        );
    }
}

export default ResultTable;
