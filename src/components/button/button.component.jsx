
import { BaseButton,GoogleSignInButton,InvertedButton } from "./button.styles";

export const Button_type_class={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getButton=(buttonType = Button_type_class.base)=>(
    {
        [Button_type_class.base]:BaseButton,
        [Button_type_class.google]:GoogleSignInButton,
        [Button_type_class.inverted]:InvertedButton,
    }[buttonType]);


const Button=({children,buttonType,...otherProps})=>{
    const CustomButton=getButton(buttonType);
    return(
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}
export default Button;