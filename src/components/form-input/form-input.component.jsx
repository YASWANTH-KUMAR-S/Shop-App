import { FormInputLabel,input,Group } from "./form-input.styles";

const FormInput =({label,...otherProps})=>{
    
    return (
        <Group>
             <input
        {...otherProps}/>
            {label && 
            (
        <FormInputLabel
          shrink={otherProps.value.length }>
            {label}
            </FormInputLabel>
        )}  
</Group>
    )
}
export default  FormInput;