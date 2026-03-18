import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    localStorage.setItem("scanpay_admin_auth", "true");
    localStorage.setItem("scanpay_admin_name", name);
    localStorage.setItem("scanpay_admin_email", email);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">S</div>
          <h1 className="text-2xl font-bold text-slate-900">Create Admin Account</h1>
          <p className="text-slate-500 mt-2">Sign up to access the ScanPay admin dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Admin User" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" type="email" placeholder="admin@scanpay.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700" type="submit">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="font-semibold text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
