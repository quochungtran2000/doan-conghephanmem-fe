import React from 'react'
import userImg from '../../access/images/user.png'

export default function User(props) {
    const { user } = props 
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3 text-center" style={{width: "100%"}}>
                <img src={userImg} className="card-img-top" alt={user.fullname}/>
                <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">{user.fullname}</p>
                    <div style={{ display: "flex",justifyContent: "space-evenly"}}>
                        {/* <button onClick={() => addToCart(user,1)} className="btn btn-primary">Add to cart</button> */}
                    </div>
                </div>
            </div>    
        </div>
        // <div className="proflie">
        //     <img src={userImg} alt="asdasd" className="profile-image" />
        //     <div className="profile-username">{user.username}</div>
        //     <div className="profile-fullname">{user.fullname}</div>
        //     {user.phone && (
        //         <div className="profile-phone">
        //         <i className="fa fa-user"></i>
        //             {user.phone}
        //         </div>
        //     )}
        // </div>
    )
}
