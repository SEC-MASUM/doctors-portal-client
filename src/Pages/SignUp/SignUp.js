import React from "react";
import auth from "../../Firebase/Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(googleUser || emailUser);

  let errorElement;
  if (googleError || emailError || updateError) {
    errorElement = (
      <p className="text-red-500">
        <small>{googleError?.message || emailError?.message}</small>
      </p>
    );
  }

  if (googleLoading || emailLoading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate("/appointment");
    // console.log(googleUser || emailUser);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password, {
      sendEmailVerification: true,
    });
    toast.info("Sent email verification", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex min-h-screen justify-center items-center my-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Sign Up Title */}
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name?.message}
                  </span>
                )}
              </label>
            </div>

            {/* Email Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </label>
            </div>

            {/* Password Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Error Section */}
            <label className="label">{errorElement}</label>
            {/* Sign Up Button */}
            <input
              type="submit"
              value="Sign Up"
              className="btn w-full max-w-xs"
            />
          </form>
          <p className="text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-secondary">
                Please Login
              </Link>
            </small>
          </p>

          <label className="divider">OR</label>
          {/* Social Login */}
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
