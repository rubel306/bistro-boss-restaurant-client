import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, updateUser } = useContext(AuthContext);
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

  //signup with react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        updateUser(data.name, data.photo)
          .then(() => {
            const userInfo = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Successful ",
                    text: "Thanks for Sign Up",
                  });
                  navigate("/");
                  reset();
                  console.log("Profile Photo and name updated ");
                }
              });
          })
          .catch((error) => console.log(error));
        console.log("New Registered User: ", newUser);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again",
        });
        console.log(error);
      });
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
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="text"
                    placeholder="Photo URL "
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-600">Photo URL is required</span>
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
