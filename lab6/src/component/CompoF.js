import React from 'react'
import UserConsumer from './component/UserContext'

class CompoF extends React.Component{
    render(){
        return(
  
         
                <UserConsumer>
               {username => {
                   return <div>Hello {username}</div>
               }}
                </UserConsumer>
      
        )
    }
}
export default CompoF