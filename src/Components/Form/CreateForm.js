import React from 'react'
import { withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { toast } from 'react-toastify';

const UploadProduct = (props) =>  {
    const { onClose } = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = ({id, name, price, standardPrice, salePrice}) => {
        const data = {id, name, price: +price, standardPrice: +standardPrice, salePrice: +salePrice}
        console.log(data)
        Axios.post('http://localhost:1708/product/add', data)
        .then(res => {
            console.log(res)
            if(res.data.success){
                toast.success('Success');
                onClose();
            }else{
                toast.error(res.data.payload.sqlMessage)
            }
        })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label htmlFor="id" class="form-label">id</label>
                <input type="text" ref={register} name="id" class="form-control" id="id" />
            </div>
            <div class="mb-3">
                <label htmlFor="name" class="form-label">Name</label>
                <input type="text" ref={register} name="name" class="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="standardPrice" class="form-label">Standard Price</label>
                <input type="text" ref={register} name="standardPrice" class="form-control" id="standardPrice" ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="salePrice" class="form-label">Sale Price</label>
                <input type="text" ref={register} name="salePrice" class="form-control" id="salePrice"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="price" class="form-label">Price</label>
                <input type="text" ref={register} name="price" class="form-control" id="price"></input>
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default withRouter(UploadProduct)