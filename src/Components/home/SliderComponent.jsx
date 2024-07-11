import React from 'react'

const SliderComponent = () => {
  return (
    <div>
        <section class="product-gallery">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <figure class="flex flex-col grow justify-center w-full bg-white rounded-3xl max-md:mt-9">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/905ea632e2a75c1089721505a19b9d6320b3c4e2e1918a663ab3e00968ba32e1?apiKey=ff00f11844934b2d9618929d5184b9ad&" class="w-full aspect-[2]" alt="Product image 1" />
                </figure>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <figure class="flex flex-col grow justify-center w-full bg-white rounded-3xl max-md:mt-9">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfaea9e5e7fe907f4ef7ae38a56f50979f00e2015f91a6c6735027180510bfa9?apiKey=ff00f11844934b2d9618929d5184b9ad&" class="w-full aspect-[2]" alt="Product image 2" />
                </figure>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <figure class="flex flex-col grow justify-center w-full bg-white rounded-3xl max-md:mt-9">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a96267e5bddf1a65b60cf1e37bebff9a792362f9af136907ec9385fa3527763?apiKey=ff00f11844934b2d9618929d5184b9ad&" class="w-full aspect-[2]" alt="Product image 3" />
                </figure>
                </article>
                <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <figure class="flex flex-col grow justify-center w-full bg-white rounded-3xl max-md:mt-9">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bff50d61aca1c97c4c5487e9e170db3c859a2741712c306b523f0a78e66a394?apiKey=ff00f11844934b2d9618929d5184b9ad&" class="w-full aspect-[2]" alt="Product image 4" />
                </figure>
                </article>
            </div>
        </section>
    </div>
  )
}

export default SliderComponent
