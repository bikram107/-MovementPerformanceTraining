import { useState } from "react";
import { supabase } from "../supabaseBackend";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isForgot, setIsForgot] = useState(false); // toggle between login and forgot form

  // Handle normal login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMessage(error.message);
    } else {
      window.location.href = "/admin";
    }
  };

  // Handle forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Enter your email to reset password.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password",
    });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset link sent to your email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-orange-500">
          {isForgot ? "Forgot Password" : "Admin Login"}
        </h2>

        {message && <p className="text-sm text-red-500">{message}</p>}

        {/* Forgot Password Form */}
        {isForgot ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Send Reset Link
            </button>
            <p
              onClick={() => {
                setIsForgot(false);
                setMessage("");
              }}
              className="text-sm text-gray-600 hover:underline cursor-pointer text-center"
            >
              Back to Login
            </p>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Login
            </button>
            <p
              onClick={() => {
                setIsForgot(true);
                setMessage("");
              }}
              className="text-sm text-orange-600 hover:underline cursor-pointer text-center"
            >
              Forgot password?
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
