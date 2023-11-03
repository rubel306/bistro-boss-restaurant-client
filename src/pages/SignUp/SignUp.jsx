import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log("New Registerd User: ", newUser);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        console.log("New Registered User: ", newUser);
      })
      .catch((error) => console.log(error));
    console.log("react hook form data", data);
  };
  return (
    <div>
      <div>
        <div className="hero  min-h-screen">
          <div className="hero-content w-full flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <img src={loginImg} alt="" />
            </div>
            <div className="card w-1/2 shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center my-8">
                Please Sign Up !
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*])(?=.*[0-9])/,
                    })}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password Must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password Must be One Uppercase, one lowercase, one special
                      character and one digit.
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-center mb-8 ms-4"
                >
                  Already have an account ? Please login
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;