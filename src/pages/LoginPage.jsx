import React from 'react';
import LoginForm from '../Components/auth/LoginFormTest';

function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-centerpx-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-32">
          <div className="flex items-center justify-center">
            <LoginForm />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/336b00db8b95923de0a609ff638f4f11f286aa5d6f7453d35cdf68e5158f1387?apiKey=ad7733614e794f228aa68fbfd330edec&"
              alt="Login visual"
              className="w-full h-auto max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;