import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContext'
import { CartContext } from '../../../Context/CartContext'
import './Header.css'

export default function Header() {
    const { user, logout } = useContext(UserContext)
    const { totalItem } = useContext(CartContext)
    return (
        <nav>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars" />
            </label>
            <label className="logo">TQHung</label>
            <ul>
                <li><Link className="header-link" to="/">Home</Link></li>
                {user.isLoggined && 
                    user.isAdmin && 
                        <li><Link className="header-link" to="/dashboard">DashBoard</Link></li>}
                <li><Link className="header-link" to="/products">Products</Link></li>
                <li><Link className="header-link" to="/cart">Cart({totalItem})</Link></li>
                {user.isLoggined && <li><Link className="header-link" to="/invoice">Invoice</Link></li>}
                {!user.isLoggined ? 
                    (<li><Link className="header-link" to="/login">Login</Link></li>)
                :   (
                    <>
                        <li><span className="header-link">{user.username}</span></li>
                        <li><span className="header-link" onClick={()=>logout()} >Logout</span></li>
                    </>
                    )
                }
            </ul>    
        </nav>
    )
}
