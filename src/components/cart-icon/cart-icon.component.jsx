import {useContext} from 'react';

import { CartIconContainer,ShoppingIcone,itemCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.contexts';


const CartIcon=()=>{

    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcone/>
        <itemCount>{cartCount}</itemCount>
        </CartIconContainer>
    )

}
export default CartIcon;