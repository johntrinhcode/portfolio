import { SiNextDotJs } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className="h-32 w-full flex flex-col items-center bg-indigo-600">
        <div className="px-8 py-4">
          <span className="flex flex-row items-center font-display text-white">
            Made with <a href="https://nextjs.org/" target="_blank" className="ml-2"><SiNextDotJs /></a>
          </span>
        </div>
      </footer>
    );
}