import { SiNextDotJs } from 'react-icons/si'

export default function Footer() {
  return (
    <div className="w-full flex flex-row justify-center items-center space-x-2 bg-gray-600 p-16 text-gray-400">
      <span>Made with</span>
      <a href="https://nextjs.org/" target="_blank">
      <SiNextDotJs />
      </a>
      
    </div>
    
  );
}