import {Link, Outlet} from 'react-router-dom';
import { Fragment ,useContext, useState} from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/card-dropdown/card-dropdown.component';
import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation.styles';
const Navigation=()=>{
  const {currentUser}= useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
          <NavLinks>
            <NavLink to='/Shop'>SHOP   
            </NavLink>
            
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              {' '}
              SIGN IN{''}
            </NavLink>
          )}
          <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;