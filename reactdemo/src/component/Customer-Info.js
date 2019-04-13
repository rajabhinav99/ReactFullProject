import React from 'react';
import CustomerDisplay from './CustomerDisplay'
class CustomerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                userName: '',
                userEmail: '',
                userMobile: '',
                userAddress: '',
                userDescription: '',
                userUseDateofVisit: ''


            }
        }


    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`${this.state.user.userName}`)
        alert(`${this.state.user.userEmail}`)
        alert(`${this.state.user.userMobile}`)
        alert(`${this.state.user.userAddress}`)
        alert(`${this.state.user.userDescription}`)
        alert(`${this.state.user.userUseDateofVisit}`)
        this.setState({display:true})
    }
    updateState(ctrl, value) {
        const { user } = this.state;
        user[ctrl] = value;
        this.setState({ user });
    }
   
    resetState()
    {
        this.setState({
            user: {
                userName: ' ',
                userEmail: ' ',
                userMobile: ' ',
                userAddress: ' ',
                userDescription: ' ',
                userUseDateofVisit: ' '
            },display: false
        })

    }
    
    render() {

        const { user } = this.state;
        return (
            <div>
                <h1>State Add and Delete</h1>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>User Name:</label><br />
                    <input type="text" value={user.userName}
                        onChange={(e) => this.updateState('userName', e.currentTarget.value)} />
                    <br />

                    <label>Email:</label><br />
                    <input type="text" value={user.userEmail}
                        onChange={(e) => this.updateState('userEmail', e.currentTarget.value)} />
                    <br />

                    <label>Mobile:</label><br />
                    <input type="text" value={user.userMobile}
                        onChange={(e) => this.updateState('userMobile', e.currentTarget.value)} />
                    <br />

                    <label>Address:</label><br />
                    <input type="text" value={user.userAddress}
                        onChange={(e) => this.updateState('userAddress', e.currentTarget.value)} />
                    <br />

                    <label>Description:</label><br />
                    <input type="text" value={user.userDescription}
                        onChange={(e) => this.updateState('userDescription', e.currentTarget.value)} />
                    <br />

                    <label>Use Date of Visit:</label><br />
                    <input type="text" value={user.userUseDateofVisit}
                        onChange={(e) => this.updateState('userUseDateofVisit', e.currentTarget.value)} />
                    <br />

                    <button value="submit" className="btn-primary">Submit</button>
                </form>
                {/* <CustomerDisplay userData={this.state.user} 
                deleteCustomer={(e)=>this.resetState()}/> */}
                {this.state.display ? <CustomerDisplay deleteCustomer={(e)=>this.resetState()}
                  userData={this.state.user} /> : null}
            </div>
              
        )
    }
}
export default CustomerInfo;