import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();

  return (
    <div>
      <h2 className="pt-5">Please LogIn</h2>
      <button onClick={googleSignIn} className="btn btn-warning">
        Google LogIn
      </button>
    </div>
  );
};

export default Login;
