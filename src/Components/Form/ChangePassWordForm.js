import React from 'react'
import { withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { toast } from 'react-toastify';

const ChangePassWordForm = (props) =>  {
    const { onClose, username } = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = ({oldPassword, newPassword1, newPassword2}) => {
        console.log(oldPassword, newPassword1, newPassword2)
        if(newPassword1 !== newPassword2){
            toast.error('new password did not match')
            return;
        }
        const data = { username , oldPassword, newPassword : newPassword1}
        Axios.post('http://localhost:1708/user/changepass', data)
        .then(res => {
            console.log(res)
            if(res.data.success){
                toast.success('Success');
                onClose();
            }else{
                toast.error(res.data.payload)
            }
        })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label htmlFor="id" class="form-label">Old Password</label>
                <input type="password" ref={register} name="oldPassword" class="form-control" id="id" />
            </div>
            <div class="mb-3">
                <label htmlFor="newPassword1" class="form-label">New PassWord</label>
                <input type="password" ref={register} name="newPassword1" class="form-control" id="newPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="newPassword2" class="form-label">New PassWord</label>
                <input type="password" ref={register} name="newPassword2" class="form-control" id="newPassword2" ></input>
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default withRouter(ChangePassWordForm)