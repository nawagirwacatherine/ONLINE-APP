import { useState } from "react";
import { IoMdFootball } from "react-icons/io";

function Nav () {

  const [ loginForm, setLoginForm] = useState(false);
  const [ registerSuccessMessage , setRegisterSuccessMessage]  = useState(false);

  const handleLoginClick  = () => {
    setLoginForm(true);
    setRegisterSuccessMessage(false);
  };

  const handleRegisterClick = () => {
    setLoginForm (false);
    setRegisterSuccessMessage(true);

  }



    return(
    <>
      <div className="nav">
      <div className="nav-items1">
      <div>CHAMPI<IoMdFootball />N BET</div>
      <div className="sports-betting">sports betting</div>
      <div>Live betting</div>
      <span className="span1">39</span>
      <div>slot</div>
      <div>virtual Games</div>
      <div>Aviator</div>
      <div>Goal</div>
      
      </div>

   <div className="nav-items2">
    <p>14:52</p>
    <button className="login" onClick={handleLoginClick}>LogIn</button>
    <button  className="register" onClick={handleRegisterClick}>Logout</button>

    { loginForm  && (
      <div className="login-form">
        <h3>Login</h3>
        <label>
          Email:
          <input type="email" placeholder ="Enter your email" />
        </label>
        <br />

        <label>
          password:
          <input type="password" placeholder="Enter your password"/>
        </label>
        <br />

        <button>submit</button>
        <div/>
      
        {registerSuccessMessage && <p className="success-message">Registration successful!</p> }

      </div>
    )}
     </div>
    </div>
    </>
    
    )
    
    
    }
    
    export default Nav;