import React from 'react';
import EmailVerificationInput from '../Components/auth/VerifyEmailInput';

const EmailVerification = () => {
  return (
    <main className="px-10 py-[150px] sm:px-5">
      <div className="container mx-auto flex flex-wrap gap-10 justify-center items-center">
        <section className="flex flex-col w-full md:w-1/2 lg:w-5/12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfc88a762229238be0ba236bdc53e7231de668be5613407739ad520eb7f8a51b?apiKey=ad7733614e794f228aa68fbfd330edec&"
            alt="Registration illustration"
            className="w-full h-auto object-cover"
          />
        </section>
        <section className="flex flex-col w-full md:w-1/2 lg:w-5/12">
          <EmailVerificationInput />
        </section>
      </div>
    </main>
  );
};

export default EmailVerification;