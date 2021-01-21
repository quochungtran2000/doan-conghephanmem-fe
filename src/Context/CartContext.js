import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

const CartContext = React.createContext()

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart)
    }, [cart])
    const addToCart = (item,quantity) => {
        const index = cart.map(item => item.id).indexOf(item.id);
        const tempQuantity = Math.abs(quantity);
        console.log(item, quantity)
        console.log('index', index)
        if(index!== -1){
            console.log('if')
            const temp = [...cart];
            temp[index].quantity = temp[index].quantity+ tempQuantity;
            setCart(temp);
            toast.success('added')
        }else{
            console.log('else')
            const temp = [...cart];
            item['quantity'] = tempQuantity;
            temp.push(item)
            setCart(temp);
            toast.success('added')
        }
    }

    const resetCart = () => setCart([])

    const totalItem =  cart.length;

    const totalPrice = cart.reduce((total,item) => total + item.quantity*item.salePrice,0)

    const deleteFromCart = (item) => {
        const temp = [...cart].filter(cartItem => cartItem.id !== item.id);
        console.log(temp)
        setCart(temp)
        toast.success('deleted')
    }

    return (
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, totalItem, totalPrice, resetCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}