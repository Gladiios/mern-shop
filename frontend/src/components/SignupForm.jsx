import { useAuth } from "../AuthContext";
import { useState } from "react";
import "../styles/global.sass"

const SignupForm = () => {
  const [alreadyMember, setAlreadyMember] = useState(true);
  const { login } = useAuth();
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Récupére les valeurs email et mdp
    const email = formData.get('email');
    const password = formData.get('password');
    const dataToSend = { email, password };
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });
        if (response.ok) {
            console.log('Succesfully signed up');
        } else {
            console.log('Error while signing up');
        }
    } catch (error) {
        console.error('Error', error);
    }
}

async function handleSignInSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  // Récupére les valeurs email et mdp
  const email = formData.get('email');
  const password = formData.get('password');
  const dataToSend = { email, password };
  
  try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log('Succesfully logged');
        login(responseData.token, responseData.role)
        window.location.replace("/")
      } else {
          console.log('Wrong email or password');
      }
  } catch (error) {
      console.error('Error', error);
  }
}
  
const signupForm = (
  <div>
    <form onSubmit={handleSignUpSubmit} >
      <input type="text" name="email" placeholder="Email"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <button type="submit">Sign up</button>
    </form>
    <p onClick={() => setAlreadyMember(true)}>Already a member? Sign in</p>
  </div>
)

  const loginForm = (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <input type="text" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
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
