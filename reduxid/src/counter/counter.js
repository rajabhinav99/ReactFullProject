import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    console.log('render',props)
    return(
        <div>
            <h1> I am a counter!</h1>
            <p> Count :{props.count}</p>
            <button onClick = {props.onIncrementClick}className='btn btn-success'>Increment</button>
            <button onClick = {props.onDecrementClick}>Decrement</button>
        </div>
    )
}

function mapStatetoProps(state)
{
        console.log('mapStatetoProps',state)
    return{
        count:state.count
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        onIncrementClick:() =>{
                console.log('clickin')
                const action ={type :'INCREMENT'}
                dispatch (action)
        },
        onDecrementClick:() =>{
            console.log('clickin')
            const action ={type :'DECREMENT'}
            dispatch (action)
    }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Counter)