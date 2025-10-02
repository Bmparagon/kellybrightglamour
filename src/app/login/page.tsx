

import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 bg-white">
      <div className="w-full max-w-md p-8 space-y-8 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center dark:text-white text-black">
          Login to Your Account
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

