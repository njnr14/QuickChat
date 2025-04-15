import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
// import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import './grid-pattern.css'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
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
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
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
export default LoginPage;