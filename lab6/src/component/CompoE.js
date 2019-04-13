import React from 'react'
import CompoF from './CompoE'
class CompoE extends React.Component{
    render(){
        return(
            <div>
                <h1>Component E</h1>
                <CompoF />
            </div>
        )
    }
}
export default CompoE