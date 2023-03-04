import { CartDropDownContainer,EmptyMessage,CartItems } from './card-dropdown.styles';
import Button from '../button/button.component';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.contexts';
import { useNavigate } from 'react-router-dom';
const CartDropDown=()=>{
    const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();

    const goToCheckOutHandler=()=>{
        navigate('/checkout');
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item)=>(
                        <CartItem key={item.id} cartItem={item}/>
                    ))): (
                        <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
        </CartDropDownContainer>
    )
}
export default CartDropDown;