import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export default function PublicRouter({
    isAuth,
    component: Component,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) => {
            if(isAuth){
                return <Redirect to={{ pathname: '/', state: { form: props.location }}} />
            }else{
                return <Component />
            }
        }}/>
    )
}
