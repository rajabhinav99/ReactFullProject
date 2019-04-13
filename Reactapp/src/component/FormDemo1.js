import React, { Component } from 'react';
export class FormDemo1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            displaystate:''
        }
    }
    handleChangefirstname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.setState({
            displaystate: event.target.value
        })
        alert(`${this.state.firstname}`)
        console.log(this.state.firstname);
        
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1 className='mystyle'>{this.state.displaystate}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={this.state.firstname}
                            onChange={this.handleChangefirstname} />
                    </div>

                    <button value="submit">Submit</button>


                </form>
            </div>
        )
    }
}

export default FormDemo1;