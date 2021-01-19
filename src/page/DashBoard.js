import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { toast } from 'react-toastify'
import CartItem from '../Components/CartItem/CartITem'
import UserProfile from '../Components/UserProfile/UserProfile'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateForm from '../Components/Form/CreateForm'

function DashBoard () {
    const [data, setData] = useState([])
    const [users, serUsers] = useState([])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        Axios.get('http://localhost:1708/product')
        .then(res => {
            res.data.success ? setData(res.data.payload) : toast.error(res.data.payload)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:1708/user')
        .then(res => {
            res.data.success ? serUsers(res.data.payload) : toast.error(res.data.payload)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5 mb-5">DashBorad</h1>
            </div>
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="d-flex justify-content-between mb-4">
                        <h2>Products</h2>
                        <button onClick={handleClickOpen} className="btn btn-outline-success">Add Products</button>
                    </div>       
                    <div className="row">
                        {data.map((item, index )=> (<CartItem key={index} item={item} />))}
                    </div>
                </div>
            
                <div className="col-12 mb-5">
                    <div className="d-flex mb-4">
                        <h2>User</h2>
                    </div>        
                    <div className="row">
                        {users.map((user, index )=> (<UserProfile key={index} user={user} />)
                        )}
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create  Product</DialogTitle>
                <DialogContent>
                    <CreateForm onClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}


export default withRouter(DashBoard)
