import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

     const navigate = useNavigate();

     const handleLogin = () => {

          setIsLoggedIn(true);

          navigate("/dashboard");
     };

     return (
          <div className="page">

               <h1>Admin Login</h1>

               <p>
                    Click the button to login.
               </p>

               <button onClick={handleLogin}>
                    Login
               </button>

          </div>
     );
}

export default Login;
