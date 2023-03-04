import './product-card.styles.scss';
import Button ,{Button_type_class}from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

const ProductCard=({product})=>{

    const {name,price,imageUrl}=product;
    const {addItemToCart}=useContext(CartContext);
    const addProductToCart=()=>addItemToCart(product);
    return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={Button_type_class.inverted} onClick={()=>addItemToCart(product)}>Add to card</Button>
    </div>)
}

export default ProductCard;