import { Eye, EyeIcon, EyeOff, EyeOffIcon, Loader2, Loader2Icon, Lock, LockIcon, LucideLoader2, Mail, MessageSquare, User } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import './grid-pattern.css'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isSigningUp } = useAuthStore();


  const validateForm = () => {
    if(!formData.fullName.trim())return toast.error("Full Name is Required");
    if(!formData.email.trim())return toast.error("Email is Required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const success =validateForm();
    if(success===true){
      signUp(formData); 
    }

  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 mt-1">
      {/* Left Side*/}

      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSumbit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden lg:flex relative bg-gradient-to-br from-primary/5 to-primary/20 overflow-hidden mt-10">
        {/* Animated circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 size-32 rounded-full bg-primary/20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 size-32 rounded-full bg-primary/20 animate-pulse delay-300" />
          <div className="absolute top-1/2 left-1/2 size-40 rounded-full bg-primary/10 animate-pulse delay-700" />
        </div>

        {/* Floating messages animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 animate-float-slow">
            <div className="bg-base-100/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-sm">Hey! Welcome to our chat app! 👋</p>
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float-slower delay-300">
            <div className="bg-primary/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-sm text-primary-content">Connect with friends instantly! 🚀</p>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-20 animate-float-slow delay-700">
            <div className="bg-base-100/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-sm">Share your thoughts securely 🔒</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center p-12 text-center">
          <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 animate-bounce-slow">
            <MessageSquare className="size-12 text-primary" />
          </div>
          <h2 className="text-4xl  font-bold mb-4 animate-fade-in">Connect & Chat</h2>
          
        </div>
      </div>
      
    </div>
  );
};

export default SignUpPage;
