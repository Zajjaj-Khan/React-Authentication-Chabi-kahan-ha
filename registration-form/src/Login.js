import React, { useEffect, useState ,useContext} from "react";
import { useRef } from "react";
import AuthContext from "./context/AuthProvider";
function Login() {
  const userRef = useRef();
  const errRef = useRef();
    const {setAuth} = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit =  async (e) =>{
    e.preventDefault();
    console.log(user,pwd)
    setSucccess(true);
  }


  return (
    <>
    {
      success ? (
        <section>
          <h1>You are Logged In !</h1>
          <br />
          <p>
            <a href="#"> Go to Home</a>
          </p>
        </section>
      ):(
        <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          
        />
         <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e)=> setPwd(e.target.value)}
          value={pwd}
          required
          
        />
        <button>Sign In</button>
      </form>
    </section>
      )
    }
    
    </>
  );
}

export default Login;
