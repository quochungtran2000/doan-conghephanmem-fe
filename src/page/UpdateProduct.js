import React, { useState, useEffect} from 'react'
import { withRouter, useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { toast } from 'react-toastify';

const UpdateForm = () =>  {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [ product, setProduct ] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:1708/product/${id}`)
        .then(res => {
            console.log(res)
            res.data.success ? setProduct(res.data.payload) : toast.error(res.data.payload.sqlMessage)
        })
    },[id])

    const onSubmit = ({ name, price, standardPrice, salePrice}) => {
        console.log('name', name ? true : false)
        console.log('price', price ? true : false)
        console.log('standardPrice', standardPrice ? true : false)
        console.log('salePrice', salePrice ? true : false)
        const data = { 
            name: name ? name : product.name , 
            price: price ? +price : +product.price, 
            standardPrice: standardPrice ? +standardPrice : +product.standardPrice, 
            salePrice: salePrice ? +salePrice : +product.salePrice}
        console.log(data)
        Axios.post(`http://localhost:1708/product/update/${id}`, data)
        .then(res => {
            console.log(res)
            res.data.success ? (
                toast.success('Success')
                // <Redirect to="/dashboard" />
            ) : toast.error(res.data.payload)
        })
    };
    return (
        <div className="container text-center">
            <div className="form-center">
                <h1 className="cus-form-title">Update Product </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="txt-field">
                        <input type="text" ref={register} name="name" placeholder={product?.name}></input>
                        <span/>
                        <label>Product Name</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="standardPrice" placeholder={product?.standardPrice} ></input>
                        <span/>
                        <label>Standard Price</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="salePrice" placeholder={product?.salePrice}></input>
                        <span/>
                        <label>Sale Price</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="price" placeholder={product?.price}></input>
                        <span/>
                        <label>Price</label>
                    </div>
                    <button className="cus-form-button mb-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(UpdateForm)