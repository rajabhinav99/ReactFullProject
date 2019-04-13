import React from 'react'
import SignOut from './signout';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeusername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        window.location.replace('/logout/'+this.state.username);
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <h1 className='mystyle'>{this.state.displaystate}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>username:</label>
                        <input type="text" value={this.state.username}
                            onChange={this.handleChangeusername} />
                    </div>
                    <div>
                        <label>password:</label>
                        <input type="password" value={this.state.password}
                            onChange={this.handleChangepassword} />
                    </div>
                    <button value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage
