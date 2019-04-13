import React, { Component } from 'react';
export class AddContact extends Component {
    contactname =React.createRef();
    contactnumber =React.createRef();
    handleAddContact=() =>{
        let contactObject ={contactname:this.contactname.current.value,
                            contactnumber:this.contactnumber.current.value};
                            this.props.addContact(contactObject)
    
    }

    render() {
        const contact = this.props.contact;
        return (
            <div className="well">
                <form>
                    Contact Name:<input type="text" placeholder="Contact Name"
                            ref={this.contactname}/>
                    Contact Number:<input type="text"placeholder="Contact Number"
                            ref={this.contactnumber}/>

                    <button onClick={this.handleAddContact} className="bt btn-success" >Add Contact</button>
                </form >
            </div>
        )
    }
}

export default AddContact;