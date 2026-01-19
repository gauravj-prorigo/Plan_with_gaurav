import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Log_Sin_model.css"
import { Authcontext, AuthProvider } from "../context/AuthContext";

const Log_Sin_model = () => {
  const [signup, Setsignup] = useState(true);
  const {signups,login} = useContext(Authcontext)
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  function handleformsubmit(data) {
    console.log(data);
    if(signup){
        signups(data)
    }
    else{
        login(data)
    }
    reset()
  }

  function handlechange() {
    clearErrors("email", "username", "password");
  }

  function handlesignup(){
    Setsignup(!signup)
  }
  return (
    <div className="sinup_main">
      <form onSubmit={handleSubmit(handleformsubmit)}>
        <div className="sinup_sub">
          {signup ? (
            <div className="signup_email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                onChange={handlechange}
              />
              {errors.email && <span>Email required</span>}
            </div>
          ) : null}
          <div className="signup_username">
            <label htmlFor="username">username</label>
            <input {...register("username", { required: true })} />
            {errors.username && <span>Username required</span>}
          </div>

          <div className="signup_password">
            <label htmlFor="password">password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Password required</span>}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div onClick={handlesignup}>{signup ? "Signup" : "Login"}</div>
    </div>
  );
};

export default Log_Sin_model;
