import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';
import Link from "next/link";
import { AiFillHome } from 'react-icons/ai'
import Nav from '../../components/Nav';
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai'
import { useState } from 'react';

export default function BlogHome({ allPosts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = (allPosts.length % itemsPerPage) === 0 ? Math.floor(allPosts.length / itemsPerPage) : Math.floor((allPosts.length / itemsPerPage) + 1);

  const getPostsForCurrentPage = (allPosts, currentPage, itemsPerPage) => {
    const postsForCurrentPage = [];
    for (let i = (currentPage * itemsPerPage); i < (itemsPerPage + (currentPage * itemsPerPage)); i++) {
      if (allPosts[i]) {
        postsForCurrentPage.push(allPosts[i]);
      }
    }
    return postsForCurrentPage;
  };

  const firstPage = () => {
    setCurrentPage(0);
  }

  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const lastPage = () => {
    setCurrentPage(totalPages - 1);
  }

  console.log('Current Page: ' + currentPage);
  console.log('Items per Page: ' + itemsPerPage);
  console.log('Total Page: ' + totalPages);
  console.log(getPostsForCurrentPage(allPosts, currentPage, itemsPerPage));
  const getTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()] + " " + date.getDate() + ', ' + date.getFullYear();
  }

  return (
    <div className="h-full">
      <Nav isHomeVisible={false} isBlogVisible={false} isProjectsVisible={false} isContactVisible={false} />
      <section className="px-4 md:px-36 lg:px-64 pt-24">
        <span className="flex flex-row bg-gray-100 p-4 rounded-md">
          <span className="w-3/4 text-gray-800 flex flex-row tracking-tight font-display space-x-2 items-end">
            <Link href="/blog"><span className="text-gray-600 font-normal tracking-normal cursor-pointer">Posts</span></Link>
          </span>
        </span>
        <div className="flex flex-col px-4 pt-4 mt-4 pb-4 rounded-md border-solid border border-gray-200">
        { 
          getPostsForCurrentPage(allPosts, currentPage, itemsPerPage).map((post, index) => {
            return (
            <Link href={ post.link }>
              <div className="flex flex-col rounded-md cursor-pointer p-2 transition-all duration-500 hover:bg-gray-100">
                <span className="w-full flex flex-col md:flex-row md:items-center justify-between">
                  <h2 className="text-gray-800 text-base">{ post.title }</h2>
                  <h3 className="text-gray-400">{ getTimestamp(post.timestamp) }</h3>
                </span>            
              </div>
            </Link>
            )
          })
        }
        </div>
    </section>

      <section className="w-full flex flex-row items-center px-4 md:px-36 lg:px-64 mt-4">
        <span className="text-sm text-gray-400">1 - 10 of { allPosts.length }</span>
        <div className="flex flex-1 justify-end flex-row space-x-2 text-gray-400">
          <AiOutlineDoubleLeft onClick={ firstPage }></AiOutlineDoubleLeft>
          <AiOutlineLeft onClick={ previousPage }></AiOutlineLeft>
          <AiOutlineRight onClick={ nextPage }></AiOutlineRight>
          <AiOutlineDoubleRight onClick={ lastPage }></AiOutlineDoubleRight>
        </div>
      </section>
    </div>
  )
}


export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'pages/blog/posts');
    const filenames = await fs.readdir(postsDirectory);
  
    let files = await Promise.all(filenames.map(async filename => {
      const filePath = path.join(postsDirectory, filename)
      const content = await fs.readFile(filePath, 'utf8')
      const matter = grayMatter(content);
      return {
        filename,
        matter
      }
    }));
  
    const allPosts = files.map(file => {
      return {
        path: `/blog/posts/${file.filename.replace('.mdx', '')}`,
        timestamp: file.matter.data.timestamp,
        title: file.matter.data.title,
        link: '/blog/posts/' + file.matter.data.slug,
        summary: file.matter.data.summary
      }
    }).sort((postA, postB) => postB.timestamp - postA.timestamp);
  
    return {
      props: {
        allPosts: allPosts
      }
    }
  }