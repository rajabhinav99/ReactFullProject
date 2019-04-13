import React, { Component } from 'react';
export class ListDemo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Name:
{this.props.name}</p>
                <p>Age :
{this.props.age}</p>
                <p>User name:
{this.props.user.name}
                </p>
                <div>
                    <h3>Hobbies :</h3>
                    <ul>
                        {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default ListDemo;