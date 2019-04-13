import React from 'react'
import LoginPage from './loginpageComponent'
import ReactDOM from 'react-dom';

class SignOut extends React.Component {

    handleSubmit = (event) => {
        window.location.replace('/login');
    }

    render() {
        return (
            <div>
                <p>Hii {this.props.match.params.username}</p>
                <button value="submit" onClick={this.handleSubmit}>SignOut</button>
            </div>
        )
    }
}

export default SignOut;