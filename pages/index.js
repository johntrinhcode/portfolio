import Head from 'next/head'
import React from 'react'
import Title from '../components/Title'
import Intro from '../components/Intro'
import Topics from '../components/Topics'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>John Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:h-full w-full flex flex-col flex-1 px-8 md:px-32 pb-8 font-display text-gray-800">
        <Title />
        <Intro />
        <Topics />
      </main>

      <Footer />
    </div>
  )
}
