import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { toast } from 'react-toastify'
import CartItem from '../Components/CartItem/CartITem'
function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:1708/product')
        .then(res => {
            res.data.success ? setData(res.data.payload) : toast.error(res.data.payload)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">Products</h1>
            </div>
            <div className="row">
                {data.map((item, index )=> (<CartItem key={index} item={item} />)
                )}
            </div>
        </div>
    )
}

export default withRouter(Products)