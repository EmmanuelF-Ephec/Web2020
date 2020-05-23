import React from 'react'
import {Route , Redirect} from 'react-router-dom'


const ProtectedRoute = ({component: Component, authenticated, ...rest}) => (
    <Route {...rest} render={props => {
        if(localStorage.getItem("access_token") == null)  {
            return <Redirect to="/" />
        }
        else {
            return <Component {...props}/>
        }
    }}
        />
)


export default (ProtectedRoute)
    