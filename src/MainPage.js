import { useState } from "react";

export default function Main(){
    const [showLogin , setShowLogin] = useState(false) ; 
  
    function handleShowLoginForm(){
      setShowLogin((e)=>!e) ; 
    }
    return(
      <main>
        <Header onLogin={handleShowLoginForm}/>
        <div className="main-container"> 
          <Login moveToRight={showLogin}/>
          <ExploreCard moveToLeft={showLogin}/>
        </div>
      </main>
    );
}


function Header({onLogin}){
    return(
      <header>
        <img src="img/logo.svg" alt="logo" />
  
        <div className="buttons">
          <button onClick={onLogin}>Log in</button>
          <button>Sign up</button>
        </div>
      </header>
    );
  }
  
  
  function Login({moveToRight}){
    return(
      <div className={moveToRight ? "login move" : "login"}>
        <h2>Log in to explore our packages</h2>
        <form>
          <div className="form-control">
            <label>Email :</label>
            <input type="text" placeholder="Enter your email"/>
          </div>
  
          <div className="form-control">
            <label>Password :</label>
            <input type="password" placeholder="Enter your password"/>
            <span>Forgot your password?</span>
          </div>
          
          <div className="form-control">
            <button>Let’s go</button>
            <p>Don’t have an account? <span>SIGN UP</span></p>
          </div>
        </form>
  
        <div className="login-with">
          <h3>Login with:</h3>
          <div>
            <img src="img/facebook.svg"  alt="facebook"/>
            <img src="img/google.svg"  alt="google"/>
            <img src="img/cloud.svg"  alt="cloud"/>
          </div>
        </div>
      </div>
    );
  }
  
  
  function ExploreCard({moveToLeft}){
    return(
      <div className={moveToLeft ? "explore-card move" : "explore-card"}>
        <h2>We got you special packages for summer trips</h2>
        <a href="#services"><h3>Explore now <span><img src="img/arrows-down.svg" alt="arrows-down"/></span></h3></a>
      </div>
    );
  }
  
