import React, { useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { toast } from 'react-toastify';

const UpdateProduct = (props) =>  {
    const { register, handleSubmit } = useForm();
    const { onClose, refetch } = props
    const { id } = props;
    const [ product, setProduct ] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:1708/product/${id}`)
        .then(res => {
            console.log(res)
            if(res.data.success){
                setProduct(res.data.payload)
                // setTimeout(() => refetch(),1)
                // refetch()
            } else{
                toast.error(res.data.payload.sqlMessage)
            }
        })
    },[id, refetch])

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
            if(res.data.success){
                toast.success('Success')
                onClose()
            }else{
                toast.error(res.data.payload)
            }
        })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label htmlFor="name" class="form-label">Name</label>
                <input type="text" ref={register} name="name" placeholder={product?.name} class="form-control" id="name" />
            </div>
             <div className="mb-3">
                <label htmlFor="standardPrice" class="form-label">Standard Price</label>
                <input type="text" ref={register} name="standardPrice" class="form-control" id="standardPrice" placeholder={product?.standardPrice} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="salePrice" class="form-label">Sale Price</label>
                <input type="text" ref={register} name="salePrice" class="form-control" id="salePrice" placeholder={product?.salePrice}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="price" class="form-label">Price</label>
                <input type="text" ref={register} name="price" class="form-control" id="price" placeholder={product?.price}></input>
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default withRouter(UpdateProduct)