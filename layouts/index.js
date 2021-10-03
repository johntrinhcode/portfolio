import BlogPostList from '../components/BlogPostList';
import { AiFillHome } from 'react-icons/ai'
import Link from "next/link";
import Nav from '../components/Nav';
import styles from  '../styles/BlogPage.module.css';

export default function BlogPage({ children, frontMatter }) {
    // React hooks, for example `useState` or `useEffect`, go here.
    const getTimestamp = () => {
        const date = new Date(frontMatter.timestamp)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[date.getMonth()] + " " + date.getDate() + ', ' + date.getFullYear()
    }

    return (
      <div className={ styles.blogpage }>
        <Nav isHomeVisible={false} isBlogVisible={true} isProjectsVisible={false} isContactVisible={false} />
        <section className="flex w-screen h-full flex-col py-24 px-4 md:px-36 lg:px-64">
          <span className="flex flex-row bg-gray-100 p-4 rounded-md">
            <span className="w-full text-gray-800 flex flex-row tracking-tight font-display space-x-2 items-end">
              <Link href="/blog"><span className="text-gray-400 font-normal tracking-normal cursor-pointer hover:text-gray-600">Posts /</span></Link>
              <span className="text-gray-600">{ frontMatter.title }</span>
            </span>
          </span>

          <div className="flex flex-col border-gray-200 border-solid border rounded-md mt-4 p-4">
            <div className="flex flex-col font-display font-bold text-5xl text-gray-800 border-b pb-2 mb-8">
              <span className="text-3xl font-display font-semibold text-gray-600">{ frontMatter.title }</span>
              <span className="w-full text-left font-normal text-base text-gray-400">{ getTimestamp() }</span>
            </div>
            
            <span className={ styles.blogcontent }>
                { children }
            </span>
          </div>
          <BlogPostList />
      </section>
      </div>
    )
}