export default function Projects() {
  return (
    <div id="projects" className="relative w-full md:h-1/2 flex flex-col lg:flex-row items-center md:justify-center px-8 md:px-36 lg:px-64 pt-16">
      <div className="flex w-full md:w-3/4 lg:w-1/3 flex-col mt-8 absolute invisible lg:visible lg:relative">
        <div className="sticky-note flex flex-col text-gray-700 p-4 h-32 justify-center text-center text-3xl font-handwriting">
          <span>Under construction!</span>
          <span className="text-base opacity-50">(it'll be done soon i promise)</span>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-start md:justify-end mt-10 md:mt-0">
        <div className="w-full">
          <h1 className="md:flex lg:block w-full z-10 tracking-tighter font-display font-bold text-6xl text-center md:text-right">
            <span className="w-full text-center text-gray-800">Projects.</span>
          </h1>
        </div>
        <div className="w-full z-10 text-gray-400 mt-4 md:mt-8 flex flex-col text-center md:text-right">
          <h2 className="text-center lg:text-right">
            <span>Things I've made on the side to learn something new,</span>
          </h2>
          <h2 className="text-center lg:text-right">
            <span> because it was fun, or both!</span>
          </h2>
        </div>
      </div>
      <div className="visible relative lg:invisible lg:absolute flex w-full md:w-3/4 lg:w-1/3 items-center flex-col mt-8">
        <div className="sticky-note mt-8 w-64 flex flex-col text-gray-700 p-4 h-32 justify-center text-center text-3xl font-handwriting">
          <span>Under construction!</span>
          <span className="text-base opacity-50">(it'll be done soon i promise)</span>
        </div>
      </div>
    </div>
  )
}