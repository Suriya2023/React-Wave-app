import React from 'react'

export default function Gallery() {
    return (
        <div>
            <br />
            <div className="container mb-5 mb-md-6 mb-xl-10">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
          <h2 className="display-3 fw-bolder text-f mb-4">Meet our protfolio to <br/><span
              className="bsb-tpl-font-hw display-1 text-accent fw-normal">kickstart</span> your success.</h2>
        </div>
      </div>
    </div>
            {/* Gallery */}
            <div className="tw-flex tw-justify-between container max-sm:tw-block custom-width-div">
                <div className="tw-px-1 ">

                    <div className="tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-1.jpg" />
                        <div
                            className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">
                                Canvas Lover
                            </h1>
                            <p className="">Photography</p>
                        </div>
                    </div>

                    <div className=" tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-2.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h3 className="">Wavy Road</h3>
                            <p className="">Adventure</p>
                        </div>
                    </div>

                    <div className=" tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-3.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Bright Winks</h1>
                            <p className="">Design</p>
                        </div>
                    </div>
                </div>

                <div className="tw-px-1 ">

                    <div className="tw-w-full tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-1.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Red Lava</h1>
                            <p className="">Nature</p>
                        </div>
                    </div>

                    <div className="tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-4.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Minimal Notions</h1>
                            <p className="">Design</p>
                        </div>
                    </div>
                </div>

                <div className="tw-px-1 ">
                    <div className="tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-2.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Jungle Book</h1>
                            <p className="">Adventure</p>
                        </div>
                    </div>

                    <div className="tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-3.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Golden Leaves</h1>
                            <p className="">Photography</p>
                        </div>
                    </div>

                    <div className="tw-w-full  tw-relative tw-overflow-hidden tw-mt-5 tw-rounded-2xl div-main">
                        <img alt="gallery" className="tw-w-full div-img"
                            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-4.jpg" />
                        <div className="tw-w-full tw-h-full tw-bg-black tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-flex tw-items-center tw-justify-center tw-flex-col div-sub">
                            <h1 className="">Innovative Day</h1>
                            <p className="">Photography</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}