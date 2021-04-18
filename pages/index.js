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
      
      <div className="container mx-auto bg-gradient-to-r from-bgseccond to-bgseccond2 min-h-screen sm:w-3/4 w-screen my-6 p-4 rounded-1">
        <div className="flex justify-start mb-3">
            <h1 className="text-4xl"> Discover Poll</h1>
        </div>
          <p className="antialiased  text-opacity-80"> if you interested in question you can vote</p>
        <div className="container text-purple-700 flex flex-wrap">
          <Discover/>
          <Discover/>
          <Discover/>
          <Discover/>
        </div>
      </div>
     
    </>
  )
}
