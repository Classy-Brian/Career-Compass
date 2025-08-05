import React, {useState} from 'react';
import './LoginSignUp.css'
import email_icon from '../assets/email.png' 
import password_icon from '../assets/password.png'
import user_icon from '../assets/person.png'
import { useAuth } from '../AuthContext'; 


const LoginSignUpPage = ()=>{
    const [action,setAction] = useState("Login");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, signup, isLoading } = useAuth();
    
    const handleSubmit = () => {
    if (action === "Login") {
        login(email, password);
    } else {
        signup(email, password, name);
    }
};
    // FUNCTION: Switch between Login and Sign Up forms
    const handleActionChange = (newAction) => {
        setAction(newAction); // Change the display mode
        
        // CLEAR THE FORM when switching
        // This prevents confusion if user was halfway through filling one form
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
    

    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className="underline"></div>
        </div>
        <div className='inputs'>
            {action ==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt=""/>
                <input type="text" placeholder='Name'
                    value = {name}
                    onChange={(e)=> setName(e.target.value)}
                />

                </div>}
            
            <div className='input'>
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email Address'
                    value = {email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password"placeholder='Password'
                    value = {password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                
            </div>
            
        </div> 
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        <div className="submit-container">
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Login"?"submit gray":'submit'} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        
        <div className="actual-submit">
                <button 
                    onClick={handleSubmit}           // Call our submit function
                    disabled={isLoading}             // Disable when processing
                    className="submit-button"
                >
                    {/* Dynamic button text based on current state */}
                    {isLoading ? 'Processing...' : `${action} Now`}
                </button>
            </div>
        </div>

  );
};

export default LoginSignUpPage;