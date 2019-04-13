import React from 'react';
class StateDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messages:this.props.messages
        }
    }
    changeMessage()
    {
        this.setState({
            messages:'Thank You for Visiting'
        })
    
    }
    render(){
        return(
            <div>
            <h1>{this.state.messages}</h1>
            <button onClick={() =>this.changeMessage()}>Update</button>
            </div>
        )
    }
}
export default StateDemo;