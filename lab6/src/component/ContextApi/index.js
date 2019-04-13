import React from 'react'
import Mall from './Mall'
export const MallContext = React.createContext();

class ContextDemo extends React.Component{
    render(){
        const movies= [
            {movies: 'Tiger' , time :'9 pm'}
        ]
        return(
            <MallContext.Provider value={movies}>
                <Mall />
            </MallContext.Provider>
           
        )
    }
}
export default ContextDemo