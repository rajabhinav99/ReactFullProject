import React from 'react';

class GreetingClassComponent extends React.Component{

    render()
    {
        return <h1>Welcome to {this.props.name}</h1>
        
    }
}

export default  GreetingClassComponent;