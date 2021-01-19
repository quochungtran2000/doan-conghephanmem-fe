import React, { useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { UserContext } from '../Context/UserContext'
import { toast } from 'react-toastify';

function SignUp() {
    const { updateUser } = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        Axios.post('http://localhost:1708/user/add', data)
        .then(res => {
            console.log(res)
            res.data.success ? updateUser(data) : toast.error(res.data.payload)
        })
    };
    return (
        <div className="container text-center">
            <div className="form-center">
                <h1 className="cus-form-title">Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="txt-field">
                        <input type="text" ref={register} name="username"></input>
                        <span/>
                        <label>User Name</label>
                    </div>
                    <div className="txt-field">
                        <input type="password" ref={register} name="password"></input>
                        <span/>
                        <label>Password</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="phone"></input>
                        <span/>
                        <label>Phone</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="email"></input>
                        <span/>
                        <label>Email</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="fullname"></input>
                        <span/>
                        <label>FullName</label>
                    </div>
                    <button className="cus-form-button mb-2">Submit</button>
                    {/* <input type="submit"/> */}
                    <div className="cus-form-link">
                        {`create nre account  `}
                        <Link className="ml-2" to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(SignUp)
