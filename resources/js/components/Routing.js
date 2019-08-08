import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Step1 from  './Step1';
import Step2 from  './Step2';
import Step3 from  './Step3';
import Step4 from  './Step4';


export default class Routing extends React.Component {
   render() {
       return (
           <Router>
               <div>
                   <Route exact path="/" component={Step1}/>
                   <Route path="/step2" component={Step2}/>
                   <Route path="/step3" component={Step3}/>
                   <Route path="/step4" component={Step4}/>
               </div>
           </Router>
       );
   }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Routing />, document.getElementById('app'));
}

