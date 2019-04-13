import React from 'react'

class Homes extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to homepage</h1>
                <img src={require('../image/jpeg-home.jpg')}/>
            </div>
        )
    }
}
export default Homes;