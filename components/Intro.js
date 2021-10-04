export default function Intro() {
    return (
        <div id="home" className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-10 md:px-36 lg:px-64">
        {/* On small screens, image comes before hero text. */}
        <div className="w-full md:w-0 h-1/2 md:h-0 flex flex-col items-center justify-end">
          <div className="w-48 h-48 md:invisible">
            <img src="image_1.png"></img>
          </div>
        </div>

        <div className="w-full md:w-2/3 h-1/2 flex flex-col items-center justify-start md:justify-center mt-10 md:mt-0">
          <div className="w-full">
            <h1 className="z-10 tracking-tighter font-display font-bold text-6xl text-center md:text-left">
              <span className="text-gray-400">Hey, i'm </span>
              <span className="text-gray-800">John Trinh.</span>
            </h1>
          </div>
          <div className="w-full z-10 text-gray-400 mt-4 md:mt-8 flex flex-col text-center md:text-left">
            <h2>
              <span>Let's create elegant experiences,</span>
            </h2>
            <h2>
              <span> bounce ideas and deliver great work.</span>
            </h2>
          </div>
        </div>

        {/* On larger screens, image comes after hero text. */}
        <div className="w-0 md:w-1/3 h-0 md:h-screen flex items-center justify-end invisible md:visible">
          <div className="relative w-0 md:w-48 h-0 md:h-48">
          <div className="tape-top-left"></div>
          <div className="tape-bottom-right"></div>
          <span className="absolute -bottom-12 -left-12 transform rotate-12 font-handwriting text-2xl text-gray-700">(thats me!)</span>
            <img src="image_1.png"></img>
          </div>
        </div>
      </div>
    )
}