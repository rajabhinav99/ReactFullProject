import React from 'react';
class PropsDemo extends React.Component{
    render(){
        this.props.name="change data";
        return(
            <h1>{this.props.name}</h1>
        )
    }
}
export default PropsDemo;