import React, { useContext, useEffect, useState } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Axios from 'axios'
import { toast } from 'react-toastify'
import FormatPrice from '../Components/utils/FormatPrice'

function InvoiceDetail() {
    const { id } = useParams();
    const {user} = useContext(UserContext)
    const [ invoice, setInvoice ] = useState([])

    useEffect(() => {
        if(user.username){
            Axios.post(`http://localhost:1708/invoice/${id}`, {username: user.username})
            .then(res => {
                console.log(res)
                if(res.data.success){
                    setInvoice(res.data.payload)
                }else{
                    toast.error(res.data.payload)
                }})
        }
    }, [id, user.username])
    const renderInvoice = (invoices) => {
        return invoices.map((invoice, index) => (
            <tr key={index}>
                <th scope="col">{index}</th>
                <th scope="col">{invoice.name}</th>
                <th scope="col">{invoice.quantity}</th>
                <th scope="col"><FormatPrice price={invoice.salePrice} /></th>
                <th scope="col"><FormatPrice price={invoice.quantity * invoice.salePrice}/></th>
            </tr>
        )
        )
    }

    // const getTotalPrice = (arr) => {
    //     return arr.reduce((total, item) => total + item.quantity * item.salePrice,0)
    // }

    const renderTotalPrice = () => {
        return (
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Total</th>
                <th scope="col">
                    <FormatPrice 
                        price={invoice.reduce((total, item) => total + item.quantity * item.salePrice,0)} 
                    />
                </th>
            </tr>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">Invoice No {id}</h1>
            </div>
            {invoice?.length > 0 ? (
                <div className="row">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">quantity</th>
                                <th scope="col">price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderInvoice(invoice)}
                        {renderTotalPrice()}
                        </tbody>
                    </table>
                </div>
                )
                :
                (
                    <div className="row">
                        <div>Nothin</div>
                    </div>
                )}
        </div>
    )
}

export default withRouter(InvoiceDetail)