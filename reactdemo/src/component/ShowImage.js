import React, {Component} from 'react';
class ShowImage extends Component {
    constructor() {
        super();
        this.state = {
            displayImage: true
        };
    }
    toggle() {
        this.setState({
            displayImage: !this.state.displayImage
        });
    }
    render() {
        return (
            <div>

                <h2>Image Display Based on Conditional Rendering</h2>

                <br
                />

                <button onClick={(e) => this.toggle(e)}
                    className="btn btn-warning">Toggle Image</button>

                <br/>
                <br/>
                {this.state.displayImage ?

                    <img src={require('../image/jpeg-home.jpg')}/> : <img src= {require('./To Do.png')}/>
                }
            </div>
        )
    }
}
export default ShowImage;