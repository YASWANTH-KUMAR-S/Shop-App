
import { async } from "@firebase/util";
import Button ,{Button_type_class}from "../button/button.component";
import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

import { signInWithGooglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
const defaultFormFields={
   
    email:'',
    password:'',
    
}
const SignInForm=()=>{
const [formFields,setformFields]=useState(defaultFormFields);
const {email,password,}=formFields;

console.log(formFields);

const resetFormFields=()=>{
    setformFields(defaultFormFields);
}

const signInWithGoogle=async()=>{
    await signInWithGooglePopup();
    
}
const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
        const {user}=await signInAuthUserWithEmailAndPassword(email,password);
       
        resetFormFields();
        
    }catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert('incorrect password :)');
                break;
            case 'auth/user-not-found':
                alert('User Not Found :)');
                break;
            default:
                console.log(error);    
        }
       
    console.log(error);
    }
}

const handleChange=(event)=>{
    const {name,value}=event.target;
    setformFields({...formFields,[name]:value});
}


    return(
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <h1>Sign In with your email & password</h1>
            <form onSubmit={handleSubmit}>
               

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
<div className="buttons-container">
                <Button  type="submit">Sign In</Button>
                <Button  type='button' buttonType={Button_type_class.google}onClick={signInWithGooglePopup}>Google Sign In</Button>
        </div>    </form>
        </div>
    )
}
export default SignInForm;