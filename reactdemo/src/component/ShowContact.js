import React, { Component } from 'react';
export class ShowContact extends Component {


    render() {
        const contact = this.props.contact;

        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {contact.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.contactname}</td>
                                <td>{contact.contactnumber}</td>
                                <td>
                                    <button className="btn btn-danger" 
                                    onClick={() => this.props.deleteContact(contact.id)}>
                                    Delete Contact</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowContact;