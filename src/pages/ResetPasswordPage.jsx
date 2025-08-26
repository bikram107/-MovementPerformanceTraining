import { useState, useEffect } from "react";
import { supabase } from "../supabaseBackend";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY") {
          console.log("Recovery session established:", session);
          setReady(true);
        }
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!ready) {
      setMessage("This page is only valid from a reset email link.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated! Redirecting to login...");
      setTimeout(() => (window.location.href = "/login"), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold text-orange-500">
          Reset Password
        </h2>
        {message && <p className="text-sm text-red-500">{message}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded-lg"
          required
          disabled={!ready}
        />
        <button
          type="submit"
          disabled={!ready}
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
