import React from 'react'
import { withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { toast } from 'react-toastify';

const UploadProduct = () =>  {
    const { register, handleSubmit } = useForm();
    const onSubmit = ({id, name, price, standardPrice, salePrice}) => {
        const data = {id, name, price: +price, standardPrice: +standardPrice, salePrice: +salePrice}
        console.log(data)
        Axios.post('http://localhost:1708/product/add', data)
        .then(res => {
            console.log(res)
            res.data.success ? console.log(res.data.payload) : toast.error(res.data.payload.sqlMessage)
        })
    };
    return (
        <div className="container text-center">
            <div className="form-center">
                <h1 className="cus-form-title">Create new product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="txt-field">
                        <input type="text" ref={register} name="id"></input>
                        <span/>
                        <label>Product id</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="name"></input>
                        <span/>
                        <label>Product Name</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="standardPrice"></input>
                        <span/>
                        <label>Standard Price</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="salePrice"></input>
                        <span/>
                        <label>Sale Price</label>
                    </div>
                    <div className="txt-field">
                        <input type="text" ref={register} name="price"></input>
                        <span/>
                        <label>Price</label>
                    </div>
                    <button className="cus-form-button mb-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(UploadProduct)