
import { async } from "@firebase/util";
import Button from "../button/button.component";
import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.contexts";
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignupForm=()=>{
const [formFields,setformFields]=useState(defaultFormFields);
const {displayName,email,password,confirmPassword}=formFields;



console.log(formFields);

const resetFormFields=()=>{
    setformFields(defaultFormFields);
}

const handleSubmit=async (event)=>{
    event.preventDefault();
    if(password!=confirmPassword){
        alert("password do not match");
        return;
    }
    try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password);
        
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFields();
        
    }catch(error){
        if(error.code = 'auth/email-already-in-use'){
            alert("User already exists");
        }
        else{
        console.log('user creation encountered an error',error);
        }
    }
}

const handleChange=(event)=>{
    const {name,value}=event.target;
    setformFields({...formFields,[name]:value});
}


    return(
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <h1>Sign Up with your email & password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button  type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}
export default SignupForm;