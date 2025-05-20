import React from "react";
import NavbarRegisterLogin from "../components/NavbarRegisterLogin";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#fffdf3] flex flex-col min-h-screen">
      <NavbarRegisterLogin />
      <LoginForm />
    </div>
  );
};

export default Login;
