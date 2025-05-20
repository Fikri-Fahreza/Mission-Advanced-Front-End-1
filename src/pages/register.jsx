import React from "react";
import NavbarRegisterLogin from "../components/NavbarRegisterLogin";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="bg-[#fffdf3] flex flex-col min-h-screen">
      <NavbarRegisterLogin />
      <RegisterForm />
    </div>
  );
};

export default Register;
