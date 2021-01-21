import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { UserContext } from '../Context/UserContext'
import { useForm } from "react-hook-form";
import ChangePassWordForm from '../Components/Form/ChangePassWordForm'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function User() {
    const { user  } = useContext(UserContext)
    // const [ loading, setLoading ] = useState(false);
    const [ open, setOpen ] = useState(false);
    const [ userData , setUserData ] = useState({})
    const [ reload, setReload ] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(() => {
        Axios.post(`http://localhost:1708/user`, {username: user.username})
        .then(res => {
            if(res.data.success){
                setUserData(res.data.payload)
            }else{
                toast.error(res.data.payload)
            }
        }) 
    },[user.username, reload])

    const onSubmit = (data) => {
        const { email, fullname} = data
        const payload = {username: user.username, email, fullname}
        Axios.post('http://localhost:1708/user/update', payload)
        .then(res => {
            if(res.data.success){
                toast.success('Update success');
                reset();
                setReload(!reload);
            }else{
                toast.error(res.data.payload);
            }
        })
    }
   
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">My Profile</h1>
            </div>
            <div className="row">
                <div className="col-md-4 border-right">
                    <button onClick={() => setOpen(true)} className="btn btn-outline-primary">Đổi mật khẩu</button>
                </div>
                <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fa fa-user"></i>
                            <span className="mx-2"> User Name</span>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={userData?.username} 
                            aria-label="Username" 
                            aria-describedby="addon-wrapping"
                            ref={register}
                            name="username"
                            disabled
                            />
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fa fa-envelope"></i>
                            <span className="mx-2"> Email</span>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={userData?.email} 
                            aria-label="Username" 
                            aria-describedby="addon-wrapping" 
                            ref={register}
                            name="email"
                        />
                    </div>

                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="far fa-id-card"></i>
                            <span className="mx-2">Full Name</span>
                        </span>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder={userData?.fullname} 
                            aria-label="Username" 
                            aria-describedby="addon-wrapping" 
                            ref={register}
                            name="fullname"
                            />
                    </div>

                    <div className="text-end">
                        <button className="btn btn-outline-primary">Update</button>
                    </div>
                </form>
                
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create  Product</DialogTitle>
                <DialogContent>
                    <ChangePassWordForm username={user.username} onClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default withRouter(User)
