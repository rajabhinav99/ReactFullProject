import React, { Component } from 'react';
import axios from 'axios';
//import TableRow from './TableRow';

export default class Get extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/serverport')
      .then(response => {
          //below code is an example of transformation, we can use it for pagination
          //not implemented fully,restricting no of data displayed to user as 4
          const posts=response.data.slice(0,4);
          const updposts=posts.map(
              post=>{
                  return{
                      ...post,
                      author: 'abhinav'
                  }
              }
          )
          //  this.setState({ serverports: response.data }); //gets all the data
        this.setState({ serverports: updposts });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    // // tabRow(){
    // //     return this.state.serverports.map(function(object, i){
    // //         return <TableRow obj={object} key={i} />;
    // //     });
    // }

    render() {
      return (
          <table border='1'>
         <thead>
                <tr>
                  <td>ID</td>
                  <td>Product Name</td>
                  <td>Product Specification</td>
                  <td>Product Price</td>
                </tr>
         </thead>
         <tbody>
          {this.state.serverports.map(function(object, i) {
          return (
            <tr key={i}>
              <td>{object._id}</td>
              <td>{object.productname}</td>
              <td>{object.productspec}</td>
              <td>{object.productprice}</td>
            </tr>
          );
        })}
      </tbody>
        </table>
      );
    }
  }