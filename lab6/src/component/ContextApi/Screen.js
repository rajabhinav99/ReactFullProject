import React from 'react'
import {MallContext} from './index'


const MovieDisplay =(props) => {
    return(
        <div>
            <h1>Screen Name</h1>
            {props.movies.map(n=>(<li>{n.movies}</li>))}
            <h1>Screen Time</h1>
            {props.movies.map(n=>(<li>{n.time}</li>))}
        </div>
    )
}

class Screen extends React.Component{
    render(){
    return(
        <MallContext.Consumer>
            {
    (movies) => <MovieDisplay movies={movies}/>
            }
        </MallContext.Consumer>
    )
    }
}
export default Screen