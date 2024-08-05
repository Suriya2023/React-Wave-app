import React from 'react'

function header() {
  return (
    <div>
       <section className="tw-text-gray-600 tw-body-font container tw-pt-20">
      <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-2 md:tw-flex-row tw-flex-col tw-items-center ">
        <div
          className="lg:tw-flex-grow md:tw-w-1/2 lg:tw-pr-24 md:tw-pr-16 tw-flex tw-flex-col md:tw-items-start md:tw-text-left tw-mb-16 md:tw-mb-0 tw-items-center tw-text-center">
          <h1
            className=" tw-title-font sm:tw-text-4xl tw-text-3xl tw-mb-4 tw-font-6xl tw-font-bold tw-text-gray-900 max-sm:tw-text-xl">
            We provide easy

            <br className="tw-hidden lg:tw-inline-block" /> <span
              className="bsb-tpl-font-hw display-1 text-accent fw-normal">solutions </span> for startups <br/> at affordable
            rates.
          </h1>
          <p className="tw-mb-8 tw-leading-relaxed ">
            Our methods are straight, comfortable, and established to ensure evolution and acceleration. </p>
          <div className="tw-flex tw-justify-center">
            <button
              className=" tw-inline-flex tw-text-white  tw-bg-blue-800 tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none tw-rounded-3xl tw-text-lg">Free
              Consultation</button>
            <button
              className="custom-btn tw-inline-flex hover:tw-text-white tw-duration-100 hover:tw-bg-blue-800 tw-bg-transparent tw-text-blue-800 tw-border-blue-700 tw-border-2 hover:tw-duration-500  tw-py-2 tw-px-6 focus:tw-outline-none tw-rounded-3xl tw-text-lg tw-mx-3">Buy
              Credits</button>
          </div>
        </div>
        <div className="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-full">
          <img className="tw-object-cover tw-object-center img-header" alt="hero"
            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/hero/hero-home.jpg" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default header
