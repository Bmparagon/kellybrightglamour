'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler, UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import Link from 'next/link';
import { User, Mail, Phone, Lock, Calendar, Upload } from 'lucide-react';

// Define the multi-step form data structure
interface IFormInput {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  birthday?: string;
  photo?: FileList;
  marketing?: boolean;
  terms: boolean;
}

interface StepProps {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
  watch?: UseFormWatch<IFormInput>;
}

// Step 1: Personal Information
const Step1 = ({ register }: StepProps) => (
  <div className="space-y-4 animate-fadeInUp">
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
      <input type="text" placeholder="Full Name" {...register('name', { required: true })} className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]" />
    </div>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
      <input type="email" placeholder="Email Address" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]" />
    </div>
    <div className="relative">
      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
      <input type="tel" placeholder="Phone Number" {...register('phone', { required: true })} className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]" />
    </div>
  </div>
);

// Step 2: Account Security
const Step2 = ({ register, errors, watch }: StepProps) => (
  <div className="space-y-4 animate-fadeInUp">
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
      <input type="password" placeholder="Create Password" {...register('password', { required: true, minLength: 8 })} className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]" />
    </div>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
      <input type="password" placeholder="Confirm Password" {...register('confirmPassword', { required: true, validate: (value: string) => value === watch!('password') })} className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]" />
    </div>
    {errors.confirmPassword && <p className="text-red-500 text-sm">Passwords do not match.</p>}
  </div>
);

// Step 3: Preferences
const Step3 = ({ register }: StepProps) => {
  const { onBlur, ...rest } = register('birthday');
  return (
    <div className="space-y-4 animate-fadeInUp">
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-[#8a8a8a] text-gray-500" size={20} />
        <input
          type="text"
          onFocus={(e) => e.target.type = 'date'}
          onBlur={(e) => {
            e.target.type = 'text';
            onBlur(e);
          }}
          placeholder="Birthday (Optional)"
          {...rest}
          className="w-full dark:bg-[#1f1f1f] bg-gray-200 dark:text-white text-black dark:border-[#3a3a3a] border-gray-300 rounded-lg p-3 pl-12 focus:ring-[#d4af37] focus:border-[#d4af37]"
        />
      </div>
      <div className="relative border-2 border-dashed dark:border-[#3a3a3a] border-gray-300 rounded-lg p-4 text-center">
        <Upload className="mx-auto dark:text-[#8a8a8a] text-gray-500 mb-2" size={32} />
        <label htmlFor="photo" className="text-sm dark:text-[#b0b0b0] text-gray-500 cursor-pointer">Profile Photo (Optional)</label>
        <input id="photo" type="file" {...register('photo')} className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
      </div>
    </div>
  );
};

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert('Signup submitted! (Check console for data)');
  };

  const nextStep = async () => {
    const fields: { [key: number]: (keyof IFormInput)[] } = {
        1: ['name', 'email', 'phone'],
        2: ['password', 'confirmPassword']
    };
    const isValid = await trigger(fields[step]);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="w-full max-w-2xl dark:bg-black/50 bg-white/50 backdrop-blur-lg border-2 dark:border-[#d4af37]/30 border-gray-300 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold dark:text-[#f4e4c1] text-gray-800">Create Your Account</h2>
      </div>
      
      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        {[1, 2, 3].map(s => (
            <div key={s} className={`w-1/3 h-2 rounded-full ${step >= s ? 'bg-[#d4af37]' : 'dark:bg-[#3a3a3a] bg-gray-300'}`}></div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && <Step1 register={register} errors={errors} />}
        {step === 2 && <Step2 register={register} errors={errors} watch={watch} />}
        {step === 3 && <Step3 register={register} errors={errors} />}

        {step === 3 && (
            <div className="space-y-4 animate-fadeInUp">
                <div className="flex items-center">
                    <input id="marketing" type="checkbox" {...register('marketing')} className="h-4 w-4 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" />
                    <label htmlFor="marketing" className="ml-2 block text-sm dark:text-[#b0b0b0] text-gray-500">Send me promotions, special offers, and salon updates</label>
                </div>
                <div className="flex items-center">
                    <input id="terms" type="checkbox" {...register('terms', { required: true })} className="h-4 w-4 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" />
                    <label htmlFor="terms" className="ml-2 block text-sm dark:text-[#b0b0b0] text-gray-500">I agree to the <Link href="#" className="text-[#d4af37] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#d4af37] hover:underline">Privacy Policy</Link></label>
                </div>
            </div>
        )}

        <div className="flex justify-between items-center pt-4">
          {step > 1 && <button type="button" onClick={prevStep} className="dark:text-[#b0b0b0] text-gray-500 hover:text-black dark:hover:text-white">Back</button>}
          <div className="flex-grow"></div>
          {step < 3 && <button type="button" onClick={nextStep} className="bg-[#d4af37] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#c29a2f]">Next</button>}
          {step === 3 && <button type="submit" className="w-full bg-gradient-to-r from-[#d4af37] to-[#c29a2f] text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">Create Account</button>}
        </div>

        <p className="text-center text-sm dark:text-[#b0b0b0] text-gray-500">
          Already have an account? <Link href="/login" className="font-semibold text-[#d4af37] hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;