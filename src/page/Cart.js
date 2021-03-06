import React, {  useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
import FormatPrice from '../Components/utils/FormatPrice'

function Cart() {
    const { user } = useContext(UserContext)

    const { cart, totalItem, totalPrice, resetCart, deleteFromCart } = useContext(CartContext)

    const checkout = () => {
        if(!user.isLoggined){
            toast.error('Please Login') 
        } else{
            Axios.post('http://localhost:1708/invoice/add', {username: user.username,cart: cart})
            .then(res => {
                if(res.data.success) {
                    console.log(res)
                    toast.success('Success'); 
                    resetCart();
                } else{
                    toast.error(res.data.payload);
                }
            })
        }
    }

    const renderCartItem = (cart) => {
        return cart.map((item,index )=> ( 
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><FormatPrice price={item.salePrice} /></td>
                <td><FormatPrice price={item.quantity*item.salePrice} /></td>
                <th scope="col">
                    <i className="fa fa-trash" onClick={() => deleteFromCart(item)} ></i>
                </th>
            </tr>))
    }

    const renderTotalPrice = (totalPrice) => {
        return (
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Total</th>
                <th scope="col" colSpan={2}><FormatPrice price={totalPrice} /></th>
            </tr>
            )
        }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">Cart</h1>
            </div>
            {totalItem > 0 ? (
                <div className="row">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderCartItem(cart)}
                        {renderTotalPrice(totalPrice)}
                        </tbody>
                    </table>
                    <div style={{textAlign:"right"}}>
                        <button type="button" onClick={() => checkout()} className="btn btn-primary">Checkout</button>
                    </div>
                </div>
                )
                :
                (
                    <div className="row">
                        <div className="pt-5 pb-5 text-center">
                            <h3 className="mb-5">Cart empty</h3>
                            <Link className="btn btn-outline-success" to="products">Go to Products</Link>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default withRouter(Cart)
