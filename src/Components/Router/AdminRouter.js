import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
const AdminRouter = ({
    isAuth,
    isAdmin,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} render={(props) => {
            if(isAuth && isAdmin) {
                return <Component />
            }else{
                toast.error('you are not admin')
                return <Redirect to={{ pathname: '/', state: { form: props.location }}} />
            }   
        }}/>
    )
}

export default AdminRouter