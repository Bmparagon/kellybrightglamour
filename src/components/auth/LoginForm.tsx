'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

interface IFormInput {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert('Login submitted! (Check console for data)');
  };

  return (
    <div className="w-full max-w-md bg-black/50 backdrop-blur-lg border-2 border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#f4e4c1]">Welcome Back</h2>
        <p className="text-[#b0b0b0]">Sign in to your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8a8a]" size={20} />
          <input
            type="email"
            placeholder="your.email@example.com"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full bg-[#1f1f1f] text-white border border-[#3a3a3a] rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors"
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8a8a]" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            {...register('password', { required: true })}
            className="w-full bg-[#1f1f1f] text-white border border-[#3a3a3a] rounded-lg p-3 pl-12 pr-12 focus:ring-[#d4af37] focus:border-[#d4af37] transition-colors"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] hover:text-[#d4af37]">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <span className="text-red-500 text-sm">This field is required</span>}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="rememberMe" type="checkbox" {...register('rememberMe')} className="h-4 w-4 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#b0b0b0]">Remember me</label>
          </div>
          <Link href="#" className="text-sm text-[#d4af37] hover:underline">Forgot password?</Link>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-[#d4af37] to-[#c29a2f] text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">Sign In</button>

        <p className="text-center text-sm text-[#b0b0b0]">
          Don't have an account? <Link href="/signup" className="font-semibold text-[#d4af37] hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
