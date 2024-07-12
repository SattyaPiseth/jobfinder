import React from 'react';
import RegistrationForm from '../Components/auth/RegistrationForm';

const RegistrationPage = () => {
  return (
    <main className="px-5 py-20 sm:px-10 md:py-24 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfc88a762229238be0ba236bdc53e7231de668be5613407739ad520eb7f8a51b?apiKey=ad7733614e794f228aa68fbfd330edec&"
              alt="Registration illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>
        <section className="flex justify-center lg:justify-start">
          <div className="w-full max-w-md lg:max-w-lg">
            <RegistrationForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegistrationPage;
