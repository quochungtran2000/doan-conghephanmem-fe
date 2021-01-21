import React, {useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import noimage from '../../access/images/noimage.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UpdateForm from '../Form/UpdateForm'
import FormatPrice from '../utils/FormatPrice'

export default function CartItem(props) {
    const { refetch } = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { item } = props 
    const { user } = useContext(UserContext)
    const { addToCart } = useContext(CartContext)
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3" style={{width: "100%"}}>
                <img src={noimage} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        <FormatPrice price={item.salePrice}/>
                    </p>
                    <div style={{ display: "flex",justifyContent: "space-evenly"}}>
                        {user.isAdmin && <button onClick={handleClickOpen} className="btn btn-warning">Update</button>}
                        <button onClick={() => addToCart(item,1)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div> 
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
                <DialogContent>
                    <UpdateForm refetch={refetch} onClose={handleClose} id={item.id}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}
