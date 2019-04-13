import React from 'react'

export class RefDemo  extends React.Component{
    constructor(props){
        super(props)
        this.myrefvar=React.createRef();
    }
    componentDidMount(){
        this.myrefvar.current.focus();
        console.log(this.myrefvar);
    }
    render(){
        return(
            <div>
                        <input type="text" ref={this.myrefvar}></input>
                        <button>Click</button>
            </div>
        )
    }
}
export default RefDemo;