import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductSpec = this.onChangeProductSpec.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productname: '',
            productspec:'',
            productprice: ''
        }
    }
    onChangeProductName(e) {
        this.setState({
            productname: e.target.value
        });
    }
    onChangeProductSpec(e) {
        this.setState({
            productspec: e.target.value
        });
    }
    onChangeProductPrice(e) {
        this.setState({
            productprice: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const productport = {
            productname: this.state.productname,
            productspec: this.state.productspec,
            productprice: this.state.productprice
        }
        axios.post('http://localhost:4000/serverport/add', productport)
        //.then(res => console.log(res.data));
        .then(function (response) {
            console.log(response.data);
           alert(response.data);
          });
        this.setState({
            productname: '',
            productspec:'',
            productprice: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
            <h3>Add Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Product Name:  </label>
                    <input type="text" className="form-control" 
                    value={this.state.productname} 
                     onChange={this.onChangeProductName}/>
                </div>
                <div className="form-group">
                    <label>Product Specification: </label>
                    <input type="text" className="form-control" 
                    value={this.state.productspec} 
                     onChange={this.onChangeProductSpec}/>
                </div>
                <div className="form-group">
                    <label>Product Price: </label>
                    <input type="text" className="form-control" 
                    value={this.state.productprice} 
                     onChange={this.onChangeProductPrice}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Product" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}