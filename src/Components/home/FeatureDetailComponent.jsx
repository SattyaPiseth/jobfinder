import React from 'react'

const FeatureDetailComponent = () => {
  return (
    <div>
      <section class="flex flex-col justify-center align-center py-16 max-w-full">
        <h2 class="self-center text-4xl leading-6 text-black">Feature on</h2>
        <article class="flex flex-col mt-12 text-base text-neutral-600 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <p class="text-center max-md:max-w-full">Job Finder is delighted to be covered by various Media. Our team adheres to six original core values <br/>
                (Teamwork, High Ambition, Strong Confident, Be the only ONE, Working Hard, and PDCA Quality Cycle) <br/>
                to ensure we deliver what we promise to ourselves and our customers.</p>                
        </article>
        <div class="flex justify-center align-center w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4ff153c8a8e5bf9c98136fb6d8ed297c3d759da1126d945096b3c29a7d7654?apiKey=ff00f11844934b2d9618929d5184b9ad&" class="self-start mt-3 w-[800px] aspect-[6.25] max-md:max-w-full" alt="Feature on media coverage" />
        </div>
        
    </section>
    </div>
  )
}

export default FeatureDetailComponent
