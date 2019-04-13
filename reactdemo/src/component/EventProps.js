import React from 'react';
class EventProps extends React.Component{
    updateage()
    {
        this.age=this.props.age;
        console.log("Before Age Update"+this.props.age)
        this.props.age+=5;
        console.log("After Age Update"+this.props.age)
    }
    render(){
        return(
            <div>
                <h1>{this.props.age}</h1>
                <button onClick={()=> this.updateage}></button>
            </div>
        )
    }
}
export default EventProps;