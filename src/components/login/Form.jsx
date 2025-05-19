"use client";

import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "../Loading";

const schema = z.object({
  email: z.string().min(1, "Email tidak boleh kosong"),
  password: z.string().min(1, "Password tidak boleh kosong"),
});

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    setFormError("");
    setErrors({});

    const result = schema.safeParse({ email, password });

    if (!result.success) {
        setLoading(false)
        setErrors(result.error.flatten().fieldErrors);
        return;
    }

    try {
        const res = await axios.post("http://localhost:3000/api/v1/login", {
            email,
            password,
        });
    
        Cookies.set("token", res.data.token, {
            expires: 7,
            secure: true,
            sameSite: "strict",
        });
    
        router.push("/admin/level");
    } catch (error) {
        setLoading(false)
        console.error("Login error:", error.response?.data || error.message);
        setFormError("Email atau password salah");
    }
  };

  return (
    <div className="relative h-screen w-screen flex justify-between font-poppins">
      <div className="absolute h-4/5 w-full flex justify-center self-center">
        <div className="w-3/4 flex justify-between">
          <form
            onSubmit={handleSubmit}
            className="p-10 h-full w-2/4 flex items-center rounded-[40px] shadow"
          >
            <div className="w-full space-y-10">
              <div className="space-y-5">
                <div className="text-2xl">
                  Welcome to <span className="text-[#0089ED] font-semibold">Cakap</span>
                </div>
                <div>
                  <div className="font-bold text-4xl">Masuk</div>
                  {formError && (
                    <p className="text-sm text-red-500 mb-4">{formError}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 rounded-lg w-full border border-[#D1D1D1]"
                  placeholder="Masukkan Email Anda"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.join(", ")}</p>
                )}

                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-4 rounded-lg w-full border border-[#D1D1D1]"
                  placeholder="Masukkan Password Anda"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">{errors.password.join(", ")}</p>
                )}

                <p className="text-[#4285F4] text-end text-sm">Forgot Password</p>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full p-4 text-center text-lg items-center justify-center gap-3 text-white bg-primary shadow-2xl rounded-2xl flex"
              >
                {loading ? (
                    <Loading/>
                ):(
                    <>
                        <p>Masuk</p>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                        </svg>
                    </>
                )}
              </button>
            </div>
          </form>
          <img src="/assets/login/graphic.png" alt="" className="h-full" />
        </div>
      </div>
      <div className="px-20 py-5 text-3xl font-semibold ">
        <img src="/assets/user/LogoWarna.png" alt="" className="h-10"/>
      </div>
      <img src="/assets/login/background.png" alt="" className="h-full" />
    </div>
  );
}
