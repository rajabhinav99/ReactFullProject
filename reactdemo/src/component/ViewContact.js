import React,{Component} from'react';
import AddContact from './AddContact'
import ShowContact from './ShowContact'
import axios from 'axios';
export class ViewContact extends Component{ 
    constructor(){
        super()
     this.state={contact:[]}
    }
    baseurl="http://localhost:3001/contact/";

    getContact=()=>{
            axios.get(this.baseurl).then((response)=>{
                    this.setState({contact:response.data})
            });
    }

    addContact=(contact)=>{
        axios.post(this.baseurl,contact).then((response)=>{
                this.getContact();
                alert('contact Added');
        });
    }
    deleteContact=(id) =>{
        alert('contact id:'+id)
        axios.delete(this.baseurl +id).then((res) => {
            this.getContact();},(err)=>{this.setState({error:err})})
    }

     componentDidMount(){this.getContact()}
  
    render()
    {
        return(
            <div>
            <h1 className="page-header">Manage Contact</h1>
            <AddContact addContact={(contact)=> this.addContact(contact)}/>
            <hr />
            <ShowContact contact={this.state.contact} deleteContact={this.deleteContact}/>
            </div>
        )
    }
}

export default ViewContact;