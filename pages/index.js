import Head from 'next/head'
import { useEffect,useState } from 'react'
import Discover from '../components/DiscoverItem'

export default function Home() {
  useEffect(() => {
    console.log('hello world')
  },[])
  return (
    <>
      <Head>
        <title>Pollin - discover</title>
        <link rel="icon" href="/favicon.ico" />
  
      </Head>
      
      <div className="container mx-auto bg-gradient-to-r from-bgseccond to-bgseccond2 min-h-screen sm:w-3/4 w-screen p-4 rounded-1">
        <div className="flex flex-col mb-3">
            <h1 className="text-4xl mb-2"> Discover Poll</h1>
            <p className="antialiased text-opacity-80 text-base-200 ml-3"> if you interested in question you can vote</p>
        </div>
        <div className="container flex flex-wrap">
          <Discover/>
          <Discover/>
          <Discover/>
          <Discover/>
        </div>
      </div>
     
    </>
  )
}
