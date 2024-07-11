import React from 'react';
import LoginFormTest from '../Components/auth/LoginFormTest';

function LoginPage() {
  
  return (
    <main className="flex justify-center items-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <LoginFormTest />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
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
