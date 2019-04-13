import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome';
import Funclassdemo from './component/funclassdemo';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Greeting from './component/greetings';
import GreetingClassComponent from './component/GreetingClassComponeent';
import NumListClassComponent from './component/numListClassComponent';
import ListDemo from './component/ListDemo';
import EventDemo1 from './component/EventDemo';
import EventDemo from './component/EventDemo';
import EventProps from './component/EventProps';
import StateDemo from './component/StateDemo';
import CounterDemo from './component/CounterDemo';
import Home from './component/Home'
import About from './component/About'
import Header from './component/Header';
import Form from './component/Form'
import FormDemo1 from './component/FormDemo1'
import FormDemo2 from './component/FormDemo2'
import RefDemo from './component/RefDemo'
import CustomerInfo from './component/Customer-Info'
import Homes from './component/Homes'
import LifecycleA from './component/LifeCycleA';
import ViewContact from './component/ViewContact';
import ShowImage from './component/ShowImage';

class App extends Component {
  render() {
    // let numbers=[11,12,13,14,15];

    // let user = {
    //         name: "Abhinav Raj",
    //         hobbies : ["Music","Traveling","Swimming"]
    // };
    return (

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>


      // <div>
      //    
      //        <h1>This is another tag</h1>
      //       <Welcome/>
      //       <Funclassdemo/>
      //  </div> 


      //         {/* <Greeting name="Abhinav"/>
      //         <Greeting name="Shray"/>
      //         <Greeting name="Supriya"/>
      //         <GreetingClassComponent name="Capgemini"/>
      //       <ListDemo name={user.name} age={30} user={user} />
      //       <EventDemo/>*/}
      //       {/* <EventProps age={32}/>  */}
      //       {/* <StateDemo messages="Welcome To Guest"/>
      //       <CounterDemo/> */}
      // <div className="container">
      //   <div className="row">
      //     <div className="col-xs-12">
      //       <h1>Welcome to capgemini</h1>
      //       <BrowserRouter>
      //         <div>
      //           <ul>
      //             <li>
      //               <Link to="/">Home</Link>
      //             </li>
      //             <li>
      //               <Link to="/about">About</Link>
      //             </li>
      //           </ul>
      //           <hr />
      //           <div>

      //             <Switch>
      //               <Route exact path="/" component={Home} />
      //               <Route path="/about" component={About} />
      //             </Switch>
      //           </div>
      //         </div>
      //       </BrowserRouter>
      //     </div>
      //   </div>
      // </div>



      <Router>
      <div>
      <Header/>
      <div className="container">
      <Switch>
      <Route exact path="/"component={Home}/>
      <Route exact path="/about"component={About}/>
      <Route exact path="/form"component={Form}/>
      <Route exact path="/form1"component={FormDemo1}/>
      <Route exact path="/form2"component={FormDemo2}/>
      <Route exact path="/refdemo"component={RefDemo}/>
      <Route exact path="/customerinfo"component={CustomerInfo}/>
      <Route exact path="/homes"component={Homes}/>
      <Route exact path="/lifecyclea"component={LifecycleA}/>
      <Route exact path="/viewContact"component={ViewContact}/>
      <Route exact path="/showimage"component={ShowImage}/>
      
      
      </Switch>
      </div>
      </div>
      </Router>

    );
  }
}

export default App;
