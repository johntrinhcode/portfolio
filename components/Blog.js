import Link from "next/link";

export default function Blog({ latestPosts }) {
  const getTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()] + " " + date.getDate() + ', ' + date.getFullYear();
  }

  return (
    <div id="blog" className="relative w-full md:h-screen flex flex-col lg:flex-row items-center md:justify-center px-8 md:px-36 lg:px-64 pt-16 lg:space-x-8">
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-start md:justify-center mt-10 md:mt-0">
        <div className="w-full">
          <h1 className="md:flex lg:block w-full z-10 tracking-tighter font-display font-bold text-6xl text-center md:text-left">
            <span className="w-full text-center text-gray-800">Blog.</span>
          </h1>
        </div>
        <div className="w-full z-10 text-gray-400 mt-4 md:mt-8 flex flex-col text-center md:text-left">
          <h2 className="text-center lg:text-left">
            <span>Sometimes, I have something to share.</span>
          </h2>
          <h2 className="text-center lg:text-left">
            <span>Here is a place where I do just that.</span>
          </h2>
        </div>
      </div>
      <div className="flex w-full md:w-3/4 lg:w-2/3 flex-col mt-8">
        <ul className="flex flex-col space-y-4 md:mt-0">
          {
            latestPosts.map((post, index) => {
              return (
              <Link href={ post.link }>
                <div className="flex flex-col border-gray-200 border-solid border rounded-md p-4 cursor-pointer transition-all duration-200 hover:shadow">
                  <span className="w-full flex flex-col md:flex-row md:items-center justify-between">
                    <h2 className="text-gray-800 text-2xl font-bold">{ post.title }</h2>
                    <h3 className="text-gray-400">{ getTimestamp(post.timestamp) }</h3>
                  </span>
                  
                  <h3 className="text-gray-500 mt-4">{ post.summary }</h3> 
                </div>
              </Link>
              )
            })
          }
        </ul>
        <Link href="/blog"><span className="mt-4 self-end text-gray-400 cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-md transition-all duration-200">View all</span></Link>
        
      </div>
    </div>
  )
}

