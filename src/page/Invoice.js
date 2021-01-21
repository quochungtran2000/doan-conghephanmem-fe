import React, { useContext, useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Axios from 'axios'
import { toast } from 'react-toastify'
import FormatPrice from '../Components/utils/FormatPrice'

function Invoice() {
    const {user} = useContext(UserContext)
    const [invoices, setInvoices ] = useState([])

    useEffect(() => {
        if(user.username){
            Axios.post('http://localhost:1708/invoice', {username: user.username})
            .then(res => {
                console.log(res)
                if(res.data.success){
                    setInvoices(res.data.payload)
                }else{
                    toast.error(res.data.payload)
                }})
        }
    }, [user.username])

    const renderInvoice = (invoices) => {
        return invoices.map((invoice, index) => (
            <tr key={index}>
                <th scope="col">{index}</th>
                <th scope="col">
                    <Link to={`/invoice/${invoice.id}`}>{invoice.id}</Link>
                </th>
                <th scope="col">{new Date(invoice.createAt).toLocaleDateString()}</th>
                <th scope="col"><FormatPrice price={invoice.total}/></th>
            </tr>
        )
        )
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">My Invoice</h1>
            </div>
            {invoices.length > 0 ? (
                <div className="row">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">InvoiceId</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderInvoice(invoices)}
                        </tbody>
                    </table>
                </div>
                )
                :
                (
                    <div className="row">
                        <div className="pt-5 pb-5 text-center">
                            <h3 className="mb-5">Invoice empty</h3>
                            <Link className="btn btn-outline-success" to="products">Go to Products</Link>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default withRouter(Invoice)