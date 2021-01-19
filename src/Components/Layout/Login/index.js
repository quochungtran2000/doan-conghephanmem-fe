import React from 'react'
import {} from 'react-hook-form'
import { Link } from 'react-router-dom'
export default function index() {
    return (
        <div style={{width: '100%', height: "100%", position: "relative"}}>
            <div className="cus-form">
                <h3 className="cus-form-title">Login</h3>
                <form >
                    <div className="txt-field">
                        <input type="text" />
                        <label>User Name</label>
                    </div>
                    <div className="txt-field">
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <input type="submit">Submit</input>
                    <div className="cus-form-link">
                        create new account <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
