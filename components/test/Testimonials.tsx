

const Testimonials = () => (
    <section className="py-24 md:pb-28 bg-white bg-pattern-white bg-center " >
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
        <div className="relative h-full overflow-hidden max-w-max mx-auto rounded-md">
          <button className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-16 h-16 bg-yellow-500 hover:bg-yellow-600 rounded-full">
            <svg className="ml-1" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 9.13001L1.50001 1.05001C1.34799 0.962237 1.17554 0.916031 1.00001 0.916031C0.824471 0.916031 0.652027 0.962237 0.500008 1.05001C0.347404 1.13811 0.220789 1.26497 0.132986 1.41775C0.0451825 1.57053 -0.000691684 1.7438 7.88292e-06 1.92001V18.08C-0.000691684 18.2562 0.0451825 18.4295 0.132986 18.5823C0.220789 18.735 0.347404 18.8619 0.500008 18.95C0.652027 19.0378 0.824471 19.084 1.00001 19.084C1.17554 19.084 1.34799 19.0378 1.50001 18.95L15.5 10.87C15.6539 10.7828 15.7819 10.6563 15.871 10.5035C15.96 10.3506 16.007 10.1769 16.007 10C16.007 9.82311 15.96 9.64938 15.871 9.49654C15.7819 9.3437 15.6539 9.21722 15.5 9.13001ZM2.00001 16.35V3.65001L13 10L2.00001 16.35Z" fill="white"></path>
            </svg>
          </button>
          <img src="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" />
          <video className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="flex-ui-assets/images/testimonials/video-frame.jpeg" muted="">
            <source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <span className="inline-block py-px px-2 sm:ml-6 md:mb-16 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-9xl">Quotes</span>
        <div className="relative pt-12 pb-6 sm:p-6 mb-8">
          <img className="absolute top-0 left-0" src="/img/quote-top-yellow.svg" alt="" />
          <img className="absolute bottom-0 right-0" src="/img/quote-down-yellow.svg" alt="" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter">The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</h2>
          </div>
        </div>
        <div className="sm:px-6 mb-14">
          <h3 className="mb-2 text-xl md:text-2xl font-semibold">Darren Dunlap</h3>
          <span className="text-lg text-coolGray-500 font-medium">CEO &amp; Founder at Flex.co</span>
        </div>
        <div className="sm:px-6">
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100"></button>
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-yellow-500"></button>
          <button className="inline-block h-3 w-3 rounded-full bg-coolGray-100"></button>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Testimonials