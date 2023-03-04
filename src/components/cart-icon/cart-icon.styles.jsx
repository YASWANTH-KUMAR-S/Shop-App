import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const ShoppingIcone=styled(ShoppingIcon)`
width: 50px;
height: 50px;
margin-right:-29px;
`

export const CartIconContainer=styled.div`
width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const itemCount=styled.span`
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
      `
