import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';

export default function Contact() {
  const email = 'johntrinhcode@gmail.com';
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsEmailCopied(true)
  }

  return (
    <div id="contact" className="relative w-full md:h-1/2 flex flex-col items-center md:justify-center px-8 md:px-36 lg:px-64 pt-16">
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-start md:justify-end mt-10 md:mt-0 z-10">
        <div className="w-full">
          <h1 className="md:flex lg:block w-full z-10 tracking-tighter font-display font-bold text-6xl text-center">
            <span className="w-full text-center text-white">Contact.</span>
          </h1>
        </div>
        <div className="w-full z-10 text-gray-400 mt-4 md:mt-8 flex flex-col text-center justify-center items-center">
          <h2>
            <span>Want to reach out? You can find me here.</span>
          </h2>
          <div className="flex flex-row w-full items-center justify-center">
            <div className="mt-8">
              <a className="flex flex-col md:flex-row space-x-4 justify-center items-center border border-solid border-gray-200 p-4 rounded-md bg-white">
                <div className="h-full flex flex-row space-x-4 justify-center items-center">
                  <HiOutlineMail className="w-8 h-8" />
                  <span>{ email }</span>
                </div>
                <button onClick={() => { copyEmailToClipboard() }} className="w-28 bg-gray-600 hover:bg-gray-500 transition-all duration-200 text-gray-300 p-4 rounded-md mt-4 md:mt-0">{ !isEmailCopied ? 'Copy' : 'Copied 👍'}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}