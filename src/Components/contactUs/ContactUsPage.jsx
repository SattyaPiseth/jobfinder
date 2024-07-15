import React from "react";
import ContactForm from "./ContactUsForm";

function ContactUsPage() {
  return (
    <main
      className="flex gap-5 max-md:flex-col max-md:gap-0 "
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
        <ContactForm />
      </section>
      <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full mt-20">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e34c28963a993589d581d3049653aed5412e15266f3bd15927ec0ffd7eefed1?apiKey=391ff68a63584b0181b4aa51e20262f0&"
          alt="Contact illustration"
          className="self-stretch my-auto w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
        />
      </section>
    </main>
  );
}

export default ContactUsPage;
