import Head from 'next/head'
import axios from '../utils/axios'
import Discover from '../components/DiscoverItem'

export default function Home({ data }) {
  
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
        
          {data.results.length > 0 && data.results.map((item,i) => {
            return <Discover 
                      key={i} 
                      title={item.title} 
                      create_at={item.create_at} 
                      count_answer={item.count_answer}
                      slug={item.slug} />
          })}
          
        </div>
      </div>
     
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get('api/')
    if(!res.data){
      return {
        notFound: true,
      }
    }
    return {
      props: {
        data:res.data
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      notFound: true,
     
    }
  }
}