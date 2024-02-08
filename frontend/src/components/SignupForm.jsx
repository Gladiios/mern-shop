import "../styles/global.sass"
import { useState } from "react";

const SignupForm = () => {
  const [alreadyMember, setAlreadyMember] = useState(true);

  const signupForm = (
    <div>
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button>Sign up</button>
      </form>
      <p onClick={() => setAlreadyMember(true)}>Already a member ? Sign in</p>
    </div>
  );

  const loginForm = (
    <div>
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign in</button>
      </form>
      <p onClick={() => setAlreadyMember(false)}>Not a member? Sign up</p>
    </div>
  );

  return (
    <div className="signup-form">
      <h1>{alreadyMember ? "Sign in" : "Sign up"}</h1>
      {alreadyMember ? loginForm : signupForm}
    </div>
  );
};

export default SignupForm;
