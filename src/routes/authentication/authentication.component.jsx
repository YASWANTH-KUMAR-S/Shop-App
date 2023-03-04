

import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';
const Authentication=()=>{

   
    
    return (
        <div className="authentication-container">
                <SignInForm/>
            <SignupForm/>
        </div>
    );
}
export default Authentication;


/*useEffect(async()=>{
    const response=await getRedirectResult(auth);
    if(response){
        const userDocRef=await createUserDocumentFromAuth(response.user);
    }
},[]);*/